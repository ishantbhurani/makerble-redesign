import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <form>
      <div className='border border-tertiary hover:border-secondary rounded-md overflow-hidden w-48 sm:w-auto md:w-80 flex items-center pe-2'>
        <input
          type='search'
          placeholder='Search...'
          name='q'
          className='outline-none border-none w-full px-2 py-1.5 text-sm text-primary'
        />
        <button type='submit'>
          <Search
            size={16}
            className='text-secondary hover:text-primary cursor-pointer'
          />
        </button>
      </div>
    </form>
  )
}
