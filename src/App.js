
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Document from './Pages/Document';
import SpreadSheet from './Pages/SpreadSheet';
import Home from './Pages/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/editdocs" element={<Document />}/>  
        <Route path="/editexcel" element={<SpreadSheet />}/>      
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
