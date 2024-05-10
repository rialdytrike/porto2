import React from 'react'

const MainContent = () => {
  return (
    <>
     <div className="flex flex-col basis-1/3">
              <div className="card border border-r-4 border-b-4 border-hitam basis-1/3 ml-2 mt-2">
                Education
              </div>
              <div className="card border border-r-4 border-b-4 border-hitam grow ml-2 my-2 bg-[url('/img/bg-card2.png')] bg-cover">
                Skills
              </div>
            </div>
            <div className="flex flex-col basis-1/3">
            <div className="card border border-r-4 border-b-4 border-hitam basis-1/5  mt-2">
                Working Experience
              </div>
              <div className="card border border-r-4 border-b-4 border-hitam basis-2/6  mt-2">
                Project Experience
              </div>
              <div className="card border border-r-4 border-b-4 border-hitam grow  mt-2 mb-2">
                Business Experience
              </div>
            </div>
            <div className="flex flex-col basis-1/3">
            <div className="card border border-r-4 border-b-4 border-hitam grow mr-2 my-2 bg-[url('/img/bg-card1.png')] bg-cover">
                <div className='text text-white'>
                  Portofolio Projects
                </div>
              </div>
            </div>
    </>
  )
}

export default MainContent