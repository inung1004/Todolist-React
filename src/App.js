import './App.css'
import Todolist from './todolist';
import Signup from './signup';
import Login from './login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Donelist from './donelist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/todolist" element={<Todolist></Todolist>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/donelist" element={<Donelist></Donelist>}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
