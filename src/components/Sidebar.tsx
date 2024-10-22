import PersonalProgress from './PersonalProgress'
import UpcomingTasks from './UpcomingTasks'

export default function Sidebar() {
  return (
    <aside className='hidden border-l border-gray-200 lg:block'>
      <PersonalProgress />
      <UpcomingTasks />
    </aside>
  )
}
