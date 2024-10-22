import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <form>
      <div className='flex w-48 items-center overflow-hidden rounded-md border border-tertiary pe-2 hover:border-secondary sm:w-auto md:w-80'>
        <input
          type='search'
          placeholder='Search...'
          name='q'
          className='w-full border-none px-2 py-1.5 text-sm text-primary outline-none'
        />
        <button type='submit'>
          <Search
            size={16}
            className='cursor-pointer text-secondary hover:text-primary'
          />
        </button>
      </div>
    </form>
  )
}
