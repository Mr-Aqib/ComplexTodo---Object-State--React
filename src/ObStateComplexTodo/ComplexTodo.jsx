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
              <div className="  ctcol col-lg-5 mx-auto p-3 rounded-5 shadow">
                  <h2 className='text-white text-center'>
                    Complex-Todo Object States
                  </h2>
                  <form action="">
                      <label htmlFor="">Work</label>
                      <input name='work' onChange={inputHandle} value={work} type="text" className='my-3 form-control' />
                      <label htmlFor="">Date</label>
                      <input name='when' onChange={inputHandle} value={when} type="date" className='form-control' />
                      <button onClick={handleChange} className="btn my-2 btn-success w-50 d-block mx-auto">
                          Add Todo
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