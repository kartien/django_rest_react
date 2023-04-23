import axios from "axios";

export const getAllTasks = () => {
     return axios.get('http://localhost:3000/tasks/api/v1/tasks/')
}

