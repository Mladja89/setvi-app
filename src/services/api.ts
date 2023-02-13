import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

export const getItems = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const getItem = async (id: number) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const createItem = async (item: { title: string; body: string; userId: number }) => {
  try {
    const response = await axios.post(baseUrl, item);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const updateItem = async (
  id: any,
  item: { title: string; body: string }
) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, item);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const deleteItem = async (id: number) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    throw new Error(String(error));
  }
};