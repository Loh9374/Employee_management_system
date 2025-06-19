import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import { AdminDashboard } from './components/Dashboard/AdminDashboard.jsx'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvide.jsx'

function App () {
  const [user, setuser] = useState('')
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const authData = useContext(AuthContext)


useEffect(()=>{
  const loggedInuser = localStorage.getItem("loggedInuser");
  
  if(loggedInuser){
    const userData = JSON.parse(loggedInuser)
    setuser(userData.role);
    setLoggedInUserData(userData.data)
  }
},[])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == 123) {
      setuser('admin')
      localStorage.setItem('loggedInuser', JSON.stringify({ role: 'admin' }))
    } else if (authData) {
      const employee = authData.employees.find(
        e => email == e.email && e.password == password
      )
      if (employee) {
        setuser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem(
          'loggedInuser',
          JSON.stringify({ role: 'employee' ,data:employee})
        )
      }
    } else {
      alert('invalid credantials')
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setuser} /> :  user == "employee" ? <EmployeeDashboard changeUser={setuser} data={loggedInUserData}/>:null}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}
export default App
