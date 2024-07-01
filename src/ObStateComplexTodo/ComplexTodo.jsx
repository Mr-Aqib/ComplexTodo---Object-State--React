import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import TodoData from './TodoData'

const ComplexTodo = () => {
    const [inputdata,setInputData] = useState([])
    const [input, setInput] = useState({
        work: "",
        when:""
    })
    const { work, when } = input;
    const inputHandle = (e) =>
    {
        setInput((preValue) => ({
            ...preValue,
            [e.target.name]: e.target.value
        }))
    }
    const handleChange = (e) =>
    {
        e.preventDefault()
        if (work == "" || when == "") {
            toast.error('Work and When fields are required')
            return;
        }
        else {
            toast.success('Task Added Successfully')
            setInputData([...inputdata, input])
            setInput({
                work: "",
                when: ""
            })
        }
    }
    const removeTodo = (id) =>
    {
        toast.success('Task Removed Successfully')
        setInputData(inputdata.filter((e, i) => i !== id))
        }
  return (
      <>
          <div className="container">
              <div className="  ctcol my-2 border border-1 border-white col-lg-5 mx-auto p-3 rounded-5 shadow">
                  <h1 className='text-white text-center'>
                    Complex-Todo Object States
                  </h1>
                  <form action="">
                      <label className='fs-3' htmlFor="">Work</label>
                      <input name='work' onChange={inputHandle} value={work} type="text" className='my-3 form-control' />
                      <label  className='fs-3' htmlFor="">Date</label>
                      <input name='when' onChange={inputHandle} value={when} type="date" className='form-control' />
                      
                      <button onClick={handleChange} className="d-flex flex-row  align-items-center justify-content-center my-3  d-block mx-auto">
  <div classNm="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor"  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>
                  </form>
              </div>
              <div className="rounded-5  my-3 col-lg-6 d-flex flex-column mx-auto  p-3 rounded-2">
                  <h1 className='text-center yt'>Your Todo</h1>
                  {inputdata?.map((items, index) =>
                  {
                      return <TodoData key={index}
                          {...items} index={index} remove={removeTodo} 
                      />
                })}
              </div>
          </div>
      </>
  )
}

export default ComplexTodo