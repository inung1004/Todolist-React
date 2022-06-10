import logo from './logo.svg';
import './App.css'
import Todolist from './todolist';
import Signup from './signup';
import Login from './login';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/todolist" element={<Todolist></Todolist>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
