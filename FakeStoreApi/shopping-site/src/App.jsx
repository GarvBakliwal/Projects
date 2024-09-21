import './style/App.css'
import { Routes, Route } from "react-router-dom"
import AuthForm from "./components/AuthForm.jsx";
import Homepage from "../src/pages/Homepage.jsx";
import { Toaster } from 'sonner';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/form' element={<AuthForm/>} />
      </Routes>
      <Toaster position='bottom-right'/>
    </div>
  )
}

export default App
