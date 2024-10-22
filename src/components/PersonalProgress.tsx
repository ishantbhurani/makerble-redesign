import { PROJECTS } from '../lib/data'
import Progress from './Progress'
import SidebarItem from './SidebarItem'

export default function PersonalProgress() {
  return (
    <SidebarItem title='Personal Progress'>
      <ul className='space-y-4'>
        {PROJECTS.map((project, index) => (
          <li key={index}>
            <div className='flex justify-between'>
              <span>{project.label}</span>
              <span>{project.progress}%</span>
            </div>
            <Progress value={project.progress} />
          </li>
        ))}
      </ul>
    </SidebarItem>
  )
}
