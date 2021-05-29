import axios from 'axios'
import useStore from '../../../store/userStore'


function Vault(name){
const user = useStore(state => state.user_id)
data = {
    name:name,
    user_id:user 
}

var res = axios.post("http://localhost:5000//MyVaults/addVault",data)
console.log(res)


}