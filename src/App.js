import React, { useState, useEffect } from 'react'
import EmployeeList from './components/EmployeeList'
import AddEmployeeForm from './components/AddEmployeeForm'
import { getEmployees } from './api'

const App = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees()
        setEmployees(data)
      } catch (error) {
        console.error('Error fetching employees:', error)
      }
    }
    fetchEmployees()
  }, [])

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, { id: employees.length + 1, ...newEmployee }])
  }

  return (
    <div>
      <AddEmployeeForm onAddEmployee={handleAddEmployee} />
      <EmployeeList employees={employees} />
    </div>
  )
}

export default App
