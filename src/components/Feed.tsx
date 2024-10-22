import { FEED } from '../lib/data'
import Avatar from './Avatar'

export default function Feed() {
  return (
    <main className='space-y-4 p-4 text-primary'>
      <h2 className='text-2xl font-bold mb-4'>News Feed</h2>
      <ul>
        {FEED.map((item, index) => (
          <li key={index}>
            <FeedItem {...item} />
          </li>
        ))}
      </ul>
    </main>
  )
}

type FeedItemProps = {
  avatar?: string
  name: string
  content: string
  time: string
}

const FeedItem = ({ avatar, name, content, time }: FeedItemProps) => (
  <div className='mb-4 border border-[#ccc] rounded-md p-4'>
    <div className='flex items-start space-x-4'>
      <Avatar name={name} avatar={avatar} />
      <div className='flex-1'>
        <p className='font-semibold'>{name}</p>
        <p className='text-sm text-gray-500'>{time}</p>
        <p className='mt-2'>{content}</p>
      </div>
    </div>
  </div>
)
