import React from 'react'
import CardHome from '../CardHome/CardHome'


const Popular = () => {
  return (

    <>
   <div className="flex justify-center mt-28">
       <div className="container flex flex-wrap">
            <div className='w-full md:w-1/4'>
                <h1 className='text-4xl font-bold text-center'>Last <span className='text-4xl font-extralight'>News</span></h1> 
            </div>
       </div>

   </div>
    
    <div className='flex justify-center my-16 '>
      
        <div className='container flex justify-center flex-wrap rounded-3xl bg-orange-300'>

        <CardHome />
        <CardHome />
        <CardHome />

        </div>
      
  
    </div>
    
    </>
  )
}

export default Popular