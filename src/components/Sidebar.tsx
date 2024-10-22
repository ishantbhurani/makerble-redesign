import PersonalProgress from './PersonalProgress'
import UpcomingTasks from './UpcomingTasks'

export default function Sidebar() {
  return (
    <aside className='hidden lg:block border-l border-gray-200'>
      <PersonalProgress />
      <UpcomingTasks />
    </aside>
  )
}
