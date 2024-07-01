import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { MdDeleteForever } from "react-icons/md";
const TodoData = ({ when, work, index, remove }) => {
  const [done, setDone] = useState(false)
  const handleClick= () =>
  {
    if (done == false) {
      toast.success("You Done this Task")
    }
    else {
      toast.error("You Canceled this Task")
    }
    
    }
  return (
      <>
          <div className="card my-2 rounded-4 ">
              <div className="d-flex flex-column">
                  <div className="rounded-4 text-white bg-dark card-header align-items-center justify-content-between d-flex flex-row">
            <h3 className="mb-0" style={{
              textDecoration: `${done? 'line-through':'none'}`
            }}>{work}</h3>
            <input onClick={handleClick} onChange={()=>setDone(!done)} type="checkbox"  />
                  </div>
                  <div className="text-white card-body d-flex flex-row align-items-center justify-content-between ">
            <h4 className="mb-0" style={{
              textDecoration: `${done? 'line-through':'none'}`
            }}>{when}</h4>
            
              <MdDeleteForever  onClick={()=>remove(index)}  size={25}  />
             
           
              </div>
              </div>
       </div>
      </>
  )
}

export default TodoData