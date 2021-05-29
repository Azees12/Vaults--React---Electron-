import React, {useEffect} from 'react';
import './sidedrawer.css'
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import useStore from '../../../store/userStore';
import axios from 'axios'
import { user } from './../../../store/userStore';
import Vault from '../../application/vault/index';

function SideDrawer  (props)  {


let drawerClasses = 'sidebody'
    if (props.drawer) {
      drawerClasses = 'sidebody open'
    }

const[vaults,setVaults] = useState([])
const active = useStore(state => state.setActive)
const isActive = useStore(state => state.activeV)
const user_id = useStore(state => state.user_id)
  
const data ={
    user_id:user_id
  }


useEffect(() => {
  axios.post('http://localhost:5000//MyVaults/getVaultsNames', data)
  .then(res => {
     console.log(res.data)
    setVaults(res.data.Vaults)
    console.log(vaults)
  })
},[])






return (
<nav className={drawerClasses}> 
    <div className="sidebar_header"> Vaults List </div>
    <div className="sidebar_ul">
      {vaults.map(vault => <a onClick={()=> active(vault)}  className={isActive === vault ?  "sidebar_ul_a active" : "sidebar_ul_a"}  key={vault._id.$oid}>{vault.name}</a>)}    
    </div>
    <div onClick={() => props.modal()} className="createNew"> <a>+ Create new vault</a></div>
</nav>

)
}

export default SideDrawer