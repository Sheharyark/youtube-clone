import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import MicIcon from '@mui/icons-material/Mic'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import AppsIcon from '@mui/icons-material/Apps'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Avatar } from '@mui/material'

function Header() {
  const [inputSearch, setInputSearch] = useState('')

  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <Link to='/'>
          <img
            className='header__logo'
            src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg'
            alt=''
          />
        </Link>
      </div>
      <div className='header__input'>
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder='Search'
          type='text'
          name=''
          id=''
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header__inputButon' />
        </Link>
        <MicIcon />
      </div>
      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar
          alt='Sheharyar Khan'
          scr='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        />
      </div>
    </div>
  )
}

export default Header
