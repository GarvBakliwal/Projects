import './style/App.css'
import { Routes, Route } from "react-router-dom"
import AuthForm from "./components/AuthForm.jsx";
import Homepage from "../src/pages/Homepage.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/form' element={<AuthForm/>} />
      </Routes>
    </div>
  )
}

export default App
