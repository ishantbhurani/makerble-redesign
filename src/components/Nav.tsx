import { Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../lib/data'
import NavLink from './NavLink'

export default function Nav() {
  return (
    <nav className='row-span-full flex flex-col border-r border-gray-200'>
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
            <NavLink {...navLink} />
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
    </nav>
  )
}
