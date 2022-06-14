import React from 'react';
import './modal.css'
import VaultAdd from './../../Logic/Vault/vault_logic';

function NewVault(props) {

const {status, handleChange, handleSubmit} = VaultAdd()

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
            name="name"
            type="text"
            placeholder="Vault Name"
            onChange={handleChange}
             />
            </div>
            </div>
            <div className="modal-footer">
                <button onClick={handleSubmit} className="btn-save">Save</button>
                <button onClick={() => props.modal()} className="btn-cancel">Close</button>
            </div>
            </div>
        </div>
     
    )
} 

export default NewVault