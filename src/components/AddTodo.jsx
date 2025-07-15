import React, { useState } from 'react'
import TodoNavbar from './TodoNavbar'

const AddTodo = () => {

    const [inputData,changeInput]=useState(
           
        {userid:"",id:"",title:""}
    )

   

         const inputhandler=(event)=>{
            changeInput({...inputData,[event.target.name]:event.target.value})
         }
         const readValues=()=>{
            console.log(inputData)
         }
        
  return (
    <div>
        <TodoNavbar/>
        <h1 className="text-center">Add Todo</h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-4">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="label form-label">UserId</div>
                            <input type="text" className="form-control" name='userid' value={inputData.userid} onChange={inputhandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="label form-label">Id</div>
                            <input type="text" className="form-control"name='id' value={inputData.id} onChange={inputhandler} />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="label form-label">Title</div>
                            <input type="text" className="form-control" name='title' value={inputData.title} onChange={inputhandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="label form-label">Completed</div>
                            <div className="form-check">
                                <input type="checkbox" name="" id="" className="form-check-input" />
                                <label htmlFor="" className="form-check">YES</label>
                                  <input type="checkbox" name="" id="" className="form-check-input" />
                                <label htmlFor="" className="form-check">NO</label>
                                
                                
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValues}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTodo