import { Routes, Route } from "react-router-dom";
import Header from "./page/Header";
import HomePage from "./page/home/HomePage";
import  Footer from "./page/Footer";
function App() {


  return (
    <>
      <div className='app'>
       <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
