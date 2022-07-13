import axios from 'axios'
const BASE_URL = 'http://localhost:4000'


const create = newObject => {
    return axios.post(BASE_URL+'/survey', newObject)
  }
const getAll = () => {
    return axios.get(BASE_URL+'/surveyReports')
}


export default { 
create,
getAll, 
}