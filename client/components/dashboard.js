import React from 'react'
import { Link } from 'react-router-dom'



const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/167ad636-e5c8-4170-b0df-b8b8a1da22b1">Go To Profile</Link>
      <Link to="/dashboard/main">Go To Main</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
