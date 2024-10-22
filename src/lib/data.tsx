import {
  Briefcase,
  Building,
  CircleEllipsis,
  House,
  Image,
  Search,
  SquareCheckBig,
  UserPen,
  Users,
} from 'lucide-react'
import { Post } from '../types'

export const NAV_LINKS = [
  {
    icon: <House size={20} />,
    label: 'Home',
    href: '/',
  },
  {
    icon: <Search size={20} />,
    label: 'Explore',
    href: '/',
  },
  {
    icon: <Users size={20} />,
    label: 'Contacts',
    href: '/',
  },
  {
    icon: <Briefcase size={20} />,
    label: 'Projects',
    href: '/',
  },
  {
    icon: <SquareCheckBig size={20} />,
    label: 'Tasks',
    href: '/',
  },
  {
    icon: <Image size={20} />,
    label: 'Albums',
    href: '/',
  },
  {
    icon: <Building size={20} />,
    label: 'Organizations',
    href: '/',
  },
  {
    icon: <UserPen size={20} />,
    label: 'Profile',
    href: '/',
  },
  {
    icon: <CircleEllipsis size={20} />,
    label: 'More',
    href: '/',
  },
] as const

export const PROJECTS = [
  {
    label: 'Project A',
    progress: 75,
  },
  {
    label: 'Project B',
    progress: 40,
  },
] as const

export const TASKS = [
  'Finish project proposal',
  'Team meeting at 2 PM',
  'Review client feedback',
] as const

export const FEED: Post[] = [
  {
    avatar: '/avatar.JPG',
    name: 'Ishant Bhurani',
    content:
      'Just finished a great project! Looking forward to the next challenge.',
    time: '4 minutes ago',
  },
  {
    name: 'John Doe',
    content: 'Excited to announce our new partnership with XYZ Corp!',
    time: '2 hours ago',
  },
] as const
