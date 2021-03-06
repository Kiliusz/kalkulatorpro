import { Link as MuiLink, MenuItem, Box, Divider } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'
import DarkModeSwitch from '../DarkModeSwitch'

export const NavItems = [
  { name: 'Ogrzewanie', path: '/ogrzewanie' },
  { name: 'Gaz', path: '/gaz' },
  { name: 'Woda', path: '/woda' },
  { name: 'Wentylacja', path: '/wentylacja' },
]

const NavbarMenu = () => (
  <Box sx={{ display: 'flex' }}>
    {NavItems.map(({ name, path }) => (
      <MenuItem
        key={path}
        activeStyle={{ borderBottom: '3px solid hsla(255, 100%, 100%, 0.5)' }}
        component={Link}
        to={path}
        sx={{ fontSize: '1.1rem' }}
      >
        {name}
      </MenuItem>
    ))}
    <Divider
      sx={{ mx: 3, borderColor: 'hsla(255, 100%, 100%, 0.2)' }}
      orientation="vertical"
      flexItem
    />
    <DarkModeSwitch />
  </Box>
)

export default NavbarMenu
