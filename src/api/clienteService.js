import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/cliente';

// POST: Create a new cliente
export const createCliente = (clienteData) => {
  return axios.post(API_BASE_URL, clienteData);
};

// GET: Retrieve all clientes
export const getAllClientes = () => {
  return axios.get(API_BASE_URL);
};

// Optional: GET by ID
export const getClienteById = (id) => {
  return axios.get(`${API_BASE_URL}/${id}`);
};
