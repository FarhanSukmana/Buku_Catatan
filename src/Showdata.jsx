import React, { useEffect, useState } from 'react'
import { getInitialData } from '.'
import Catatan from './Component/catatan'
import Arsip from './Component/Arsip'

const Showdata = ({data, btn_delete, btn_toggle}) => {
    const [data1, setData1]= useState(data)
    useEffect(() =>{
        setData1(data)
    },[data]
    )

  return (
    <div className='text-whit w-[1200px] h-fit flex justify-center flex-col '>
        <div>
            <h1 className='text-3xl text-white/60'>Catatan Aktif </h1>

            <div className='grid grid-cols-4 gap-4 mt-4'>
            {data1.some(item =>!item.archived) ?(
                data1.filter(item => !item.archived).map((item)=>(
                    <Catatan key={item.id} item={item} btn_delete={btn_delete} btn_toggle={btn_toggle}/>
                ))
            ):(
                <h1 className='text-white/30 flex items-center justify-center w-[1200px] text-3xl'>TIDAK ADA CATATAN</h1>
            )}    
            
            </div>
        </div>

        <div>
            <h1 className='text-3xl text-white/60 my-4'>Arsip </h1>
            <div className='grid grid-cols-4 gap-4 mt-4'>
            {data1.some(item =>item.archived)? (
                data1.filter(item => item.archived).map((item)=>(
                <Arsip key={item.id} item={item} btn_delete={btn_delete} btn_toggle={btn_toggle}/>
                ))
            ):(
                <h1 className='text-white/30 flex items-center justify-center w-[1200px] text-3xl'>TIDAK ADA CATATAN</h1>
            )}
            </div>
        </div>
    </div> 
)
}

export default Showdata