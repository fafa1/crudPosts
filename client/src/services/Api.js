//Responsável por fazer a ligação entre cliente e servidor, é preciso ter a mesma URL
import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://localhost:8081`       
    })
}
