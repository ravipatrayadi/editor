
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Document from './Pages/Document';
import SpreadSheet from './Pages/SpreadSheet';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/editdocs" element={<Document />}/>  
        <Route path="/editexcel" element={<SpreadSheet />}/>      
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
