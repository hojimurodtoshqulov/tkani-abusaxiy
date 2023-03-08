import React from 'react'
import c from "./navbar.module.scss";
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={c.navbar}>
      <div className={c.navbar__main}>
        <div className={c.navbar__main__links}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/'>Акции</NavLink>
          <NavLink to='/'>Кредит</NavLink>
          <NavLink to='/'>Помощь</NavLink>
          <NavLink to='/'>Скупка Б/У</NavLink>
          <NavLink to='/'>Контакты</NavLink>
        </div>

        <ul className={c.navbar__main__lang}>
          <li>Uz</li><span>/</span>
          <li>Ru</li><span>/</span>
          <li>En</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
