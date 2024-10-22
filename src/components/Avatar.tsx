import { getInitials } from '../lib/utils'

type AvatarProps = {
  avatar?: string
  name: string
}

export default function Avatar({ avatar, name }: AvatarProps) {
  const initials = getInitials(name)

  if (avatar)
    return (
      <img
        src={avatar}
        alt={name}
        width={20}
        height={20}
        className='h-8 w-8 max-w-full rounded-full opacity-90 hover:opacity-100'
      />
    )

  return (
    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-medium text-white'>
      <span>{initials}</span>
    </div>
  )
}
