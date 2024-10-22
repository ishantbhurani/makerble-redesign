import { Bell } from 'lucide-react'
import Avatar from './Avatar'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className='col-start-2 -col-end-1 flex items-center justify-between gap-2 border-b border-gray-200 p-4'>
      <SearchBar />

      <ul className='flex items-center gap-4 text-secondary'>
        <li className='flex items-center justify-center'>
          <button className='group relative hover:text-primary'>
            <Bell size={20} />
            <span className='absolute -top-2 left-2 h-4 w-4 bg-white'>
              <span className='absolute inset-0 flex h-4 w-4 items-center justify-center rounded-full bg-accent/60 p-2 text-[0.75rem] font-medium text-white'>
                1
              </span>
            </span>
          </button>
        </li>
        <li className='flex items-center justify-center'>
          <button>
            <Avatar name='Ishant Bhurani' avatar='/avatar.JPG' />
          </button>
        </li>
      </ul>
    </header>
  )
}
