import React, { useMemo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Grid } from '@mui/material'
import MainNavbar from './Navbar/MainNavbar'
import Footer from './Footer'
import { useDarkModeContext } from '../../contexts/DarkModeContextProvider'
import Seo from '../seo'

const Layout = ({ children }) => {
  const { mode } = useDarkModeContext()

  const customTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          // primary: { main: '#c0c0c0' },
          primary: { main: '#002C66' },
        },
        typography: {
          h1: {
            fontSize: '2rem',
            '@media (min-width:900px)': {
              fontSize: '4rem',
            },
          },
          h2: {
            fontSize: '1.5rem',
            '@media (min-width:900px)': {
              fontSize: '3rem',
            },
          },
        },
      }),
    [mode]
  )

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Seo title="test" />

      <Grid container direction="column" sx={{ minHeight: '100vh' }}>
        <Grid item>
          <MainNavbar />
        </Grid>
        <Grid item flexGrow={1}>
          {children}
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Layout
