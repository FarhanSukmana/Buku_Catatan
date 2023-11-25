import React from 'react'
import { getInitialData } from '..'

const Catatan = ({item, btn_delete, btn_toggle }) => {

  const hapus = () => {
    btn_delete(item.id);
  }

  const btn_arsip = () => {
    btn_toggle(item.id)
  }
  return (
        <div key={item.id} className='w-full h-full bg-white/20 p-4 hover:bg-white/40'>
          <div className='w-fit bg-white/60 rounded p-2 min-h-[300px] min-w-full'>
            <h1 className='text-2xl'>{item.title}</h1>
            <h2 className='text-gray-700 my-2'>{item.createdAt}</h2>
            <p className=''>{item.body}</p>
          </div>
          <div className='pt-2 flex items-center justify-center'>
            <button className='px-4 bg-red-700 mx-2 text-white text-lg' onClick={hapus}>Delete</button>
            <button className='px-4 bg-green-700 mx-2 text-white text-lg' onClick={btn_arsip}>Arsip</button>
          </div>
        </div>

  )
}

export default Catatan