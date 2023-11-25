import { useEffect, useState } from 'react'
import Showdata from './Showdata'
import { getInitialData,showFormattedDate } from '.'


function App() {

  const [newdata, setNewdata] =useState({
    title:'',
    body:''
  })

  const [data, setData] = useState(getInitialData)

  const handlechange = (e) =>{
    setNewdata({...newdata, [e.target.id]: e.target.value })
  }

  const handlesubmit = (e) =>{
    e.preventDefault()
    
    const newCatatan={
      id:data.length +1,
      title:newdata.title,
      body:newdata.body,
      createdAt: new Date().toISOString(),
      archived: false
    };
    console.log(newCatatan)
    setData([...data, newCatatan])

    setNewdata({title:'', body:''})
  }
  useEffect(() => {
    // Disini Anda bisa melakukan sesuatu dengan data jika diperlukan
    console.log('Data berubah:', data);
  }, [data]);


   const btn_delete = (id) => {
        // Menghapus catatan berdasarkan ID
        const newData = data.filter(item => item.id !== id);
        console.log({id})
        setData(newData);
      };
    
    const btn_toggle =(id) =>{
        const updatedata = data.map(item =>{
            if(item.id == id){
                return{
                    ...item, archived : !item.archived
                }
            }
            return item
        })
        setData(updatedata)
    }
    
  console.log(data)

  return (
    <div className='flex flex-col items-center bg-black/80 min-h-screen'>
      {/* Inputan */}
        <div className='m-8 w-[600px] h-[350px] border-4 border-gray-500 rounded-xl flex flex-col  bg-white/20 '>
          <div className='w-full h-fit flex items-center justify-center'>
            <h1 className='font-bold text-xl text-white'>BUKU CATATAN</h1>
          </div>

        <div className='m-4 h-full'>
          <form onSubmit={handlesubmit}>
            <input className='p-1 w-full rounded'
            placeholder='Masukan Judul...'
            id='title'
            value={newdata.title}
            onChange={handlechange}
            required
            ></input>

            <textarea className='my-2 p-2 w-full h-[215px] flex resize-none text-left align-top  pl-1 rounded'
            placeholder='Tuliskan Catatan DIsini...'
            id='body'
            value={newdata.body}
            onChange={handlechange}>
            </textarea>

            <div className='flex items-center justify-center'>
              <button className='flex items-center bg-white/60 px-4 py-1 rounded hover:bg-white/80 active:bg-white/20' 
              type='submit'>
                Submit</button>
            </div>
          </form>
        </div>
      </div>

      <Showdata data={data} btn_delete={btn_delete} btn_toggle={btn_toggle}/>

    </div>
  )
}

export default App
