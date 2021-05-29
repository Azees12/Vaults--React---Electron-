import React from "react"
import useStore from "../../../store/userStore";
import  './credentials.css';


function Credential() {
    const creds = useStore(state =>state.activeC)
    return (
        <div className="cred">
           
           <div className="cred_bod">
            <div className="cred_content">
                <div className="cred_content_header">
                    <a>Name</a> <a>Website</a> <a>Username</a> <a>Password</a> <a>Date</a>
                </div>
            <div className="cred_list">
                {creds.credentials.map(cred => 
                <div key={cred.cred_id.$uuid} className="cred_list_item">
                <a>{cred.cred_name}</a>   <a>{cred.website}</a>   <a>*********</a>   <a type="password">********</a>   <a>{cred.date_uploaded.$date}</a>
                </div>)}
                
          

            </div>
             </div>
            <div className="cred_add">
               <button  > + </button> 
            </div>
           </div>
        </div>
    )
}

export default Credential