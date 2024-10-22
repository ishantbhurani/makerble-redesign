import { CheckSquare } from 'lucide-react'
import { TASKS } from '../lib/data'
import SidebarItem from './SidebarItem'

export default function UpcomingTasks() {
  return (
    <SidebarItem title='Upcoming Tasks'>
      <ul className='space-y-2'>
        {TASKS.map((task, index) => (
          <li key={index} className='flex items-center'>
            <CheckSquare size={16} className='mr-2 text-accent' />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </SidebarItem>
  )
}
