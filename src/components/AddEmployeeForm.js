import React, { useState } from 'react'
import { addEmployee } from '../api'

const AddEmployeeForm = ({ onAddEmployee }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('Engineering')
  const [designation, setDesignation] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!name || !email || !designation) {
      setError('All fields are required.')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format.')
      return
    }

    try {
      const newEmployee = { name, email, department, designation }
      await addEmployee(newEmployee)
      onAddEmployee(newEmployee)

      setSuccess('Employee added successfully! 🎉')

      setName('')
      setEmail('')
      setDesignation('')

      setTimeout(() => setSuccess(''), 3000)
    } catch (error) {
      setError('Error adding employee')
    }
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-xl font-bold mb-4'>Add Employee</h1>
      {error && <p className='text-red-500'>{error}</p>}
      {success && <p className='text-green-500'>{success}</p>}{' '}
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='p-2 border border-gray-300 rounded w-full'
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='p-2 border border-gray-300 rounded w-full'
        />
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className='p-2 border border-gray-300 rounded w-full'
        >
          <option value='Engineering'>Engineering</option>
          <option value='HR'>HR</option>
        </select>
        <input
          type='text'
          placeholder='Designation'
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className='p-2 border border-gray-300 rounded w-full'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded w-full'
        >
          Add Employee
        </button>
      </form>
    </div>
  )
}

export default AddEmployeeForm
