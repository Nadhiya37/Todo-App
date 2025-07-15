import React, { useEffect, useState } from "react";
import TodoNavbar from "./TodoNavbar";
import axios from "axios";

const ViewAllTodo = () => {
 
  const [isLoading,changeisLoading]=useState(true)


  const [todoData, changeTodoData] = useState({
    todos: [
      
    ],
    total: 254,
    skip: 0,
    limit: 30,
  });


  const fetchData=()=>{
    axios.get("https://dummyjson.com/todos").then(
      (response)=>{

        changeisLoading(false)

        changeTodoData(response.data)
      }
    ).catch((error)=>{
      alert("someting went wrong" + error.message)
    })
  }

  useEffect(()=>{fetchData()},[])
  return (
    <div>
      <TodoNavbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  
                <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Todo</th>
                <th>Status</th>
              </tr>

                  </thead>
                  {isLoading ?(<div class="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div class="spinner-border ms-auto" aria-hidden="true"></div>
</div>) : (<tbody>
                    {todoData.todos.map((value, index) => {
                      return (
                        <tr>
                         
                          <td>{value.id}</td>
                          <td>{value.userId}</td>
                          <td>{value.todo}</td>
                          <td>{value.completed ? <p className="text-success">Completed</p> : <p className="text-danger">Not completed</p>}</td>
                        </tr>
                      );
                    })}
                  </tbody>)}
                  
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllTodo;
