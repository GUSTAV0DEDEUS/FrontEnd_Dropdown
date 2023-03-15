import React from 'react'
import './styles.sass'
import Logo from '../../assets/logo.svg'
import Menu from '../menu/menu'

const Header = () => {

  return (
    <header>
      <figure>
        <img src={Logo} alt="Snap logo" />
      </figure>
      <Menu />
    </header>
  )
}

export default Header