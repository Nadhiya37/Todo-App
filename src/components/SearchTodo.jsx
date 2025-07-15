import React, { useState } from 'react'
import TodoNavbar from './TodoNavbar'

const SearchTodo = () => {
    const [searchData,setSearchData]=useState(
        {title:""}
    )
    const inputhandler=(event)=>{
        setSearchData({...searchData,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(searchData)
    }
  return (
    <div>
        <TodoNavbar/>
        <h1 className="text-center">Search Todo</h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-4">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" name="title" value={searchData.title}  onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValues}>SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchTodo