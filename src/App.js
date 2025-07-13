import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import DeleteTodo from './components/DeleteTodo';
import ViewAllTodo from './components/ViewAllTodo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddTodo/>}/>
        <Route path="/search" element={<SearchTodo/>}/>
        <Route path="/delete" element={<DeleteTodo/>}/>
        <Route path="/view" element={<ViewAllTodo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
