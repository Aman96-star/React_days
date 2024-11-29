// import React from 'react'
// import Header from './compnent/Header/header'
// import Footer from './compnent/Footer/footer'
// import Outlet from 'react-router-dom'

// export default function Layout() {
//   return (
//     <>
//     <Header/>
//     <Outlet/>
//     <Footer/>
//     </>
//   )
// }

import React from 'react'
import Header from './compnent/Header/header'
import Footer from './compnent/Footer/footer'
import Outlet from 'react-router-dom'

function Layout() {
  return (
    <>
  <Header/>
  <Footer/>
  <Outlet/>
    </>
  )
}

export default Layout