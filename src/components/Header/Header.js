import React from 'react'
import styles from './Header.module.scss'
import { Navbar, Nav } from 'react-bootstrap'

export default function Header({ menuItems }) {
  return (
    // MODIFIED: Removed expand="lg" and related components
    <Navbar bg="transparent" sticky="top" className={styles.navbar}>
      <Navbar.Brand href="/"><b>Graphon</b></Navbar.Brand>
      <Nav className="ml-auto">
        {menuItems.map((d, i) => {
          return (
            <Nav.Link key={'item' + i} href={d.href}>
              {d.label}
            </Nav.Link>
          )
        })}
      </Nav>
    </Navbar>
  )
}