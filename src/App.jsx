
import Home from "./Pages/Home";
import Certificates2 from "./Components/Certificates2";
import ContactUs from "./Pages/ContactUs";

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  
  
  return (
    <BrowserRouter>
            <Switch>
                <Route exact path = '/' component = {Home} />
                <Route exact path = '/certificates' component = {Certificates2} />
                <Route exact path = '/contact-form' component = {ContactUs} />
    
            </Switch>
        </BrowserRouter>
  )
}

export default App;