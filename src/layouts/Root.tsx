import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'

export default function Root() {
  return (
    <div className='grid min-h-screen grid-cols-[4rem_1fr] md:grid-cols-[16rem_1fr] lg:grid-cols-[16rem_1fr_20rem] grid-rows-[4rem_1fr]'>
      <Nav />
      <Header />
      <Outlet />
      <Sidebar />
    </div>
  )
}
