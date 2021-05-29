import create from "zustand"
import { devtools,persist } from "zustand/middleware"
import { useEffect } from 'react';
import Vault from '../compenents/application/vault/index';

export const user = (set) => ({
    
    token:'',
    username: '',
    user_id:{},
    activeV:{
      
    },
    activeC:[{}],

    setActiveC: (Cred) => set(() => ({
        activeC: Cred,     
    })),

    setActive: (Vault) => set(() => ({
        activeV: Vault,     
    })),


    setUser: (token,username,user_id) => set(() => ({
        token : token,
        username : username,
        user_id : user_id,
    })),

    clearUser: () => set(() => ({
        token:'',
        username: '',
        user_id:'',
        activeV:''
    })),

    
})

const useStore = create(persist(user))


 export default useStore
