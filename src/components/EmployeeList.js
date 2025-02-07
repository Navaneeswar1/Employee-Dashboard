import React, { useState } from 'react'

const EmployeeList = ({ employees }) => {
  const [search, setSearch] = useState('')
  const [department, setDepartment] = useState('')

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) &&
      (department ? employee.department === department : true)
  )

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-xl font-bold mb-4'>Employee Dashboard</h1>

      <div className='mb-4 flex space-x-4'>
        <input
          type='text'
          placeholder='Search by name'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='p-2 border border-gray-300 rounded'
        />
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className='p-2 border border-gray-300 rounded'
        >
          <option value=''>All Departments</option>
          <option value='Engineering'>Engineering</option>
          <option value='HR'>HR</option>
        </select>
      </div>

      <ul className='space-y-2'>
        {filteredEmployees.map((employee) => (
          <li key={employee.id} className='p-2 border rounded'>
            <p>
              <strong>{employee.name}</strong>
            </p>
            <p>{employee.email}</p>
            <p>
              {employee.department} | {employee.designation}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EmployeeList
