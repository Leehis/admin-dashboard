import { Visibility } from '@material-ui/icons'
import React from 'react'
import './widgetSmall.css'

const WidgetSmall = () => {
  return (
    <div className='widgetSmall'>
      <span className='widgetSmallTitle'>New Join Members</span>
      <ul className='widgetSmallList'>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            className='widgetSmallImage'
            alt='avatar'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            className='widgetSmallImage'
            alt='avatar'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' /> Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            className='widgetSmallImage'
            alt='avatar'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            className='widgetSmallImage'
            alt='avatar'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            className='widgetSmallImage'
            alt='avatar'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUsername'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSmall
