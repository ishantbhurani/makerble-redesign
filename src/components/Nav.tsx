import { Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../lib/data'
import NavLink from './NavLink'

export default function Nav() {
  return (
    <nav className='row-span-full border-r border-gray-200'>
      <div className='sticky top-0 flex min-h-screen flex-col'>
        <div className='mx-auto p-3 md:mx-0'>
          <Link to='/'>
            <picture>
              <source srcSet='/logo.png' media='(min-width: 768px)' />
              <img
                src='/logo-mobile.png'
                alt='Makerble'
                width={134}
                height={38}
                className='block h-[38px] w-auto max-w-full'
              />
            </picture>
          </Link>
        </div>

        <ul>
          {NAV_LINKS.map((navLink, index) => (
            <li key={index}>
              <NavLink
                {...navLink}
                className={index === 0 ? 'bg-[rgba(30,64,175,0.15)]' : ''} // simulating active link
              />
            </li>
          ))}
        </ul>

        <div className='mt-auto'>
          <NavLink
            href='/'
            icon={<Settings />}
            label='Settings'
            className='p-4'
          />
        </div>
      </div>
    </nav>
  )
}
