import  React, {useState,useEffect}  from 'react';
import useStore from '../../../store/userStore';
import './vault.css'
import axios from 'axios'
import Credential from './../credentials/index';
import Audio from './../audio/audio';
import Image from './../images/images';



function  Vault() {
    
    const [toggleState, setToggleState] = useState(1);
    const active = useStore(state => state.setActiveC)
    const toggleTab = (index) => {
      setToggleState(index);
    };
    const vaultA = useStore(state => state.activeV)
    
  

    useEffect(() => {
    if(vaultA){
      var data = {
        vault_id: vaultA.vault_id.$uuid
      }
      axios.post('http://localhost:5000//MyVaults/getVaults', data)
      .then(res => {  
        active(res.data.Vault)
    } )
     
      
    }
    else{
      console.log("vault")
    }
      

      
    },[vaultA])
  

    return (
  <div>
    {vaultA ? <div className="vault">
        <div className="vault_header">
          {vaultA.name}
        </div>
        <div className="vault_content">
            <div className="vault_filters"> 
            <div className="vault_filters_header">
                Filters
            </div>
            <div className="vault_filters_body">
               <div><p>Date Uploaded ↑ ↓ </p> </div>
              <div className='filter_input'> <input className="vault_filters_body_input" placeholder="Filter By Name"/> </div> 

              <div  className='filter_input'> <input className="vault_filters_body_input" placeholder="Filter By Website"/> </div> 
              
            </div>
               
            </div>
        <div className="vault_block"> 
          <div className="tab-block2">
        <button
          className={toggleState === 1 ? "tabs2 active-tabs2" : "tabs2"}
          onClick={() => toggleTab(1)}
        >
        Credenitials
        </button>
        <button
          className={toggleState === 2 ? "tabs2 active-tabs2" : "tabs2"}
          onClick={() => toggleTab(2)}
        >
        Images
        </button>

        <button
          className={toggleState === 3 ? "tabs2 active-tabs2" : "tabs2"}
          onClick={() => toggleTab(3)}
        >
        Audio
        </button>
        </div>
          
          { toggleState === 1 ? <Credential /> : toggleState == 2 ? <Image/> :  <Audio/>
              
          }

         
       


        </div>
       
      
      
        </div>

        </div> : <div className="select"> 
        <div className="select-body">
              <h1>Select or Create a Vault </h1>
        </div>
          
        </div> 
        }
        
</div>
      

   );
}

export default Vault