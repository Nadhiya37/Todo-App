import React, { useEffect, useState } from "react";
import TodoNavbar from "./TodoNavbar";
import axios from "axios";

const ViewAllTodo = () => {
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
        changeTodoData(response.data)
      }
    ).catch()
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
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">UserId</th>
                      <th scope="col">Todo</th>
                      <th scope="col">Completed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todoData.todos.map((value, index) => {
                      return (
                        <tr>
                         
                          <td>{value.id}</td>
                          <td>{value.userId}</td>
                          <td>{value.todo}</td>
                          <td>{value.completed ? "Yes" : "No"}</td>
                        </tr>
                      );
                    })}
                  </tbody>
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
