import { getInitials } from '../lib/utils'

type AvatarProps = {
  avatar?: string
  name: string
}

export default function Avatar({ avatar, name }: AvatarProps) {
  const initials = getInitials(name)

  console.log({ initials })

  if (avatar)
    return (
      <img
        src={avatar}
        alt={name}
        width={20}
        height={20}
        className='max-w-full w-8 h-8 rounded-full opacity-90 hover:opacity-100'
      />
    )

  return (
    <div className='bg-secondary text-sm font-medium text-white w-8 h-8 flex items-center justify-center rounded-full'>
      <span>{initials}</span>
    </div>
  )
}
