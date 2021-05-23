import create from "zustand"
import { devtools,persist } from "zustand/middleware"
import { useEffect } from 'react';

export const user = (set) => ({
    
    token:'',
    username: '',
    user_id:{},
    vault_names: [],
    vaults:[],

    setUser: (token,username,user_id,vaults) => set(() => ({
        token : token,
        username : username,
        user_id : user_id,
        vaults: vaults
    })),

    clearUser: () => set(() => ({
        token:'',
        username: '',
        user_id:{},
        vault_names: [],
        vaults:[]
        
    })),

    
})

const useStore = create(persist(user))


 export default useStore
