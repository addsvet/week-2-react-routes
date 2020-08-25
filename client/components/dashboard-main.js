import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMain = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard/profile/167ad636-e5c8-4170-b0df-b8b8a1da22b1">Go To Profile</Link>
      <Link to="/dashboard">Go To Root</Link>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
