import {
  AttachMoney,
  BarChart,
  ChatBubble,
  DynamicFeed,
  LineStyle,
  Mail,
  Person,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  Work,
} from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <LineStyle className='sidebarIcon' /> Home
            </li>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcon' /> Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUp className='sidebarIcon' /> Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <Person className='sidebarIcon' /> Users
            </li>
            <li className='sidebarListItem'>
              <Storefront className='sidebarIcon' /> Products
            </li>
            <li className='sidebarListItem'>
              <AttachMoney className='sidebarIcon' /> Transactions
            </li>
            <li className='sidebarListItem'>
              <BarChart className='sidebarIcon' /> Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <Mail className='sidebarIcon' /> Mail
            </li>
            <li className='sidebarListItem'>
              <DynamicFeed className='sidebarIcon' /> Feedback
            </li>
            <li className='sidebarListItem'>
              <ChatBubble className='sidebarIcon' /> Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <Work className='sidebarIcon' /> Manage
            </li>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcon' /> Analytics
            </li>
            <li className='sidebarListItem'>
              <Report className='sidebarIcon' /> Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
