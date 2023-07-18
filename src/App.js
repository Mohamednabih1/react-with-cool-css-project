
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/homepage.js';
function App() {
  return (
    <div>
        <BrowserRouter>
          <div className="BodyContainer">
            <div className="flex_item_header">
              
            </div>
            <div className="flex_item_body">
              <Routes>
                <Route path="/" element={<Home />} />
                
              </Routes>
            </div>
          </div>
        </BrowserRouter> 
            
    </div>

  );
}


export default App;
