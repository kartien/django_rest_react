import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:3000/tasks/api/v1/tasks/";

const tasksApi = axios.create({
  baseURL: URL,
});

export const getAllTasks = () => {
  return tasksApi.get("/");
};

export const getTask = (id) => tasksApi.get(`/${id}/`);

export const createTask = (task) => {
  return tasksApi.post("/", task);
};

export const deleteTask = (id) => tasksApi.delete(`/${id}`);

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);
