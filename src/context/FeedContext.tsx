import { createContext, useState } from 'react'
import { FEED } from '../lib/data'
import { Post } from '../types'

type FeedContextType = {
  feed: Post[]
  addPost: (post: Post) => void
}

export const FeedContext = createContext<FeedContextType | null>(null)

export default function FeedProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [feed, setFeed] = useState<Post[]>(() => {
    const localFeed = window.localStorage.getItem('feed')
    return localFeed ? (JSON.parse(localFeed) as Post[]) : FEED
  })

  function addPost(post: Post) {
    const updatedFeed = [post, ...feed]
    setFeed(updatedFeed)
    window.localStorage.setItem('feed', JSON.stringify(updatedFeed))
  }

  return (
    <FeedContext.Provider value={{ feed, addPost }}>
      {children}
    </FeedContext.Provider>
  )
}
