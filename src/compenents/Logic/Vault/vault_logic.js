import axios from 'axios'
import useStore from '../../../store/userStore'
import { useState } from 'react';


const VaultAdd = () => {
    const status = useState(false)
    const [res,setRes] = useState({})
    const user = useStore(state => state.user_id)
    const [data, setData] = useState({
        name:'',
        user_id: user
        })

    const handleChange = e => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(data)
        axios.post("http://localhost:5000//MyVaults/addVault",data).then(data => setRes(data.data))
        console.log(res)
    }

   
    

    

    return {status , handleChange, handleSubmit}

}

export default VaultAdd