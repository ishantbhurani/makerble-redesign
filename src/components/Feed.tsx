import { FEED } from '../lib/data'
import Avatar from './Avatar'
import CreatePost from './CreatePost'

export default function Feed() {
  return (
    <main className='p-4 text-primary'>
      <h1 className='mb-4 text-2xl font-bold'>News Feed</h1>
      <CreatePost />
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
  <div className='mb-4 rounded-md border border-[#ccc] p-4'>
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
