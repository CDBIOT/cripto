
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';

import Home from './Components/pages/Home';
import Calc from './Components/pages/calc';
import Users from './Components/pages/Users';
import Graphics from './Components/pages/Graphics';
import Quotation from './Components/pages/Quotation';
import BotPress from './Components/pages/BotPress';


function App() {

return (
  <div className = "App" > 
 <Router>
    <Navbar />
   
         <Routes>
            <Route exact path="/"   element={<Home />}></Route>
            <Route path="/Calc"   element={<Calc />}></Route>
            <Route path='/Graphics' element={<Graphics />}></Route>
            <Route path='/Quotation'element={<Quotation />}></Route>
            <Route path="/Users"    element={<Users />} ></Route>
            <Route path='/BotPress' element={<BotPress />}></Route> 
         </Routes>
    </Router>
  </div>
    );
}

export default(App);


