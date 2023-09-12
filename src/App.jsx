
import Home from "./Pages/Home";
import Certificates2 from "./Components/Certificates2";
import ContactUs from "./Pages/ContactUs";

import { BrowserRouter,Routes, Route } from 'react-router-dom'

function App() {
  
  
  return (
    <BrowserRouter>
            <Routes>
                <Route exact path = '/' element={<Home />} />
                <Route exact path = '/certificates' element={<Certificates2 />} />
                <Route exact path = '/contact-form' element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
  )
}

export default App;