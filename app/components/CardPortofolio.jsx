'use client'
import React,{useState} from 'react'

const CardPortofolio = ({image,alt,description}) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };
  return (
    <div className="card border-2 border-hitam bg-latar h-40 max-h-40 mx-2 mt-2  flex-row">
    <div className="basis-1/3 flex flex-col justify-center">
    <div className=" h-36 w-36 bg-latar ml-2">
    <img src={image} className="rounded-lg border-2 border-hitam" alt={alt} onClick={toggleModal} />
          {showModal && (
                      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                      <div className="bg-latar p-4 rounded-lg max-w-[44rem] mx-auto">
                        <img src={image} className="rounded-lg max-w-full h-auto" alt={alt} />
                        <button onClick={toggleModal} className="btn btn-sm  mt-2">Close</button>
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
  )
}

export default CardPortofolio