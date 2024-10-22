import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

type NavLinkProps = {
  icon: React.ReactNode
  label: string
  href: string
  className?: string
}

export default function NavLink({
  icon,
  href,
  label,
  className,
}: NavLinkProps) {
  return (
    <Link
      to={href}
      className={cn(
        'flex items-center justify-center md:justify-normal gap-2 px-4 py-3 text-secondary hover:text-primary hover:bg-[rgba(30,64,175,0.15)]',
        className
      )}
    >
      {icon}
      <span className='hidden md:block'>{label}</span>
    </Link>
  )
}
