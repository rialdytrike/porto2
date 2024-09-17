'use client'

import React,{useState} from 'react'

const CardPortofolio = ({image,alt,description,content}) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };
  return (
    <div className='card border-2 border-hitam bg-latar  mx-2 py-2 mb-2 flex flex-col'>
<div className='text text-md font-semibold line-clamp-1 m-2'>{alt}</div>
    <div className="flex flex-row" onClick={toggleModal}>
      
    <div className="basis-1/3 flex flex-col justify-center">
    
    <div className="  w-36 bg-latar ml-2" >
      
    <img src={image} className="rounded-lg border-2 border-hitam" alt={alt}  />
          {showModal && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                      <div className="bg-latar p-4 rounded-lg max-w-[44rem] mx-auto max-h-[80%]  overflow-y-auto ">
                        <img src={image} className="rounded-lg max-w-full h-auto" alt={alt} />
                        <div className='flex flex-col'>
                        <div className='text text-lg font-semibold text-center m-2'>{alt}</div>
                        <>
                          {content}
                        </>
                          </div>
                        <button onClick={toggleModal} className="btn btn-sm   mt-2">Close</button>
                      </div>
                    </div>
          )}
      </div>
    

    </div>
    <div className="basis-2/3 ml-2 mb-2 overflow-hidden ">
   <div className="text-sm text-hitam mt-2 ">
    {description}
    </div>
    
          </div>

    </div>
    </div>
  )
}

export default CardPortofolio