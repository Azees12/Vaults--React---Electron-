import React from 'react';
import './modal.css'
function NewVault(props) {


let drawerClasses = 'modal-wrapper'
    if (props.show) {
      drawerClasses = 'modal-wrapper open'
    }
   
    return ( 
      
        <div className={drawerClasses}>
            <div className="modal-header"> 
            </div>
            <div className="modal-content"> 
            <div className="modal-body">
            <h4>Create Vault Name</h4>
            <div>
            <input 
            type="text"
            placeholder="Vault Name"
             />
            </div>
            </div>
            <div className="modal-footer">
                <button  className="btn-save">Save</button>
                <button onClick={() => props.modal()} className="btn-cancel">Close</button>
            </div>
            </div>
        </div>
     
    )
} 

export default NewVault