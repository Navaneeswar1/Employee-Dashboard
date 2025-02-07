import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const getEmployees = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    throw new Error('Error fetching employees')
  }
}

export const addEmployee = async (employee) => {
  try {
    const response = await axios.post(API_URL, employee)
    return response.data
  } catch (error) {
    throw new Error('Error adding employee')
  }
}
