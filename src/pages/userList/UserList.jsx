import React from 'react'
import './userList.css'
import { DataGrid } from '@material-ui/data-grid'

const UserList = () => {
  const columns = [
    { field: 'id', headerName: 'Username', width: 70 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'status', headerName: 'Username', width: 130 },
    { field: 'transaction', headerName: 'Username', width: 130 },
  ]

  const rows = [
    {
      id: 1,
      username: 'snowyyqt',
      avatar:
        'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
      email: 'snow@hotmail.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 2,
      username: 'snowyyqt',
      avatar:
        'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
      email: 'snow@hotmail.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 3,
      username: 'snowyyqt',
      avatar:
        'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
      email: 'snow@hotmail.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 4,
      username: 'snowyyqt',
      avatar:
        'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=1&w=500',
      email: 'snow@hotmail.com',
      status: 'active',
      transaction: '$120.00',
    },
  ]

  return (
    <div className='userList'>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  )
}

export default UserList
