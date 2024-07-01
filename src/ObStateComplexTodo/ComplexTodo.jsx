import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'

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
  return (
      <>
          <div className="container">
              <div className="col-lg-5 mx-auto p-3 rounded-5 shadow">
                  <h4 className='text-center'>
                    Complex-Todo Object States
                  </h4>
                  <form action="">
                      <label htmlFor="">Work</label>
                      <input name='work' onChange={inputHandle} value={work} type="text" className='form-control' />
                      <label htmlFor="">Date</label>
                      <input name='when' onChange={inputHandle} value={when} type="date" className='form-control' />
                      <button onClick={handleChange} className="btn my-2 btn-success w-50 d-block mx-auto">
                          Add Todo
                      </button>
                  </form>
              </div>
          </div>
      </>
  )
}

export default ComplexTodo