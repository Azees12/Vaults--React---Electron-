import React, { Suspense } from 'react';
import MoonLoader from "react-spinners/ClipLoader";
import './App.css';
import Loader from './compenents/loader/loader'
const Routing = React.lazy(() => import('./compenents/Routing/Routing')) ;
function App() {


  return (
   
 
       <Suspense fallback= {
        <div className="App-body">
        <div className="App-Intial">
         <MoonLoader color={"#ffff"}  size={150} />
        </div>
        </div>
       }>
        <Routing/>
      </Suspense>
   
    
     
      
  
  );
}

export default App;
