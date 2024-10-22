import { Bell } from 'lucide-react'
import Avatar from './Avatar'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className='col-start-2 -col-end-1 border-b border-gray-200 p-4 flex items-center justify-between gap-2'>
      <SearchBar />

      <ul className='text-secondary flex items-center gap-4'>
        <li className='flex items-center justify-center'>
          <button className='relative hover:text-primary group'>
            <Bell size={20} />
            <span className='absolute -top-2 left-2 bg-white w-4 h-4'>
              <span className='absolute inset-0 font-medium flex items-center justify-center text-white rounded-full text-[0.75rem] p-2 bg-accent/60 w-4 h-4'>
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
