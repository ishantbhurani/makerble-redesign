import { useRef } from 'react'
import { toast } from 'sonner'
import { useFeed } from '../hooks/useFeed'

export default function CreatePost() {
  const { addPost } = useFeed()
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!textareaRef.current) {
      return
    }

    const text = textareaRef.current.value.trim()

    if (!text || text.length < 3) {
      toast.error('Invalid input! Please enter at least 3 characters.')
      return
    }

    const post = {
      avatar: '/avatar.JPG',
      name: 'Ishant Bhurani',
      content: text,
      time: 'just now',
    }

    addPost(post)
    toast.success('Post added successfully!')
    textareaRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className='mb-6'>
      <div className='flex flex-col rounded-md border border-tertiary p-2 focus-within:border-secondary hover:border-secondary'>
        <textarea
          ref={textareaRef}
          placeholder='What is happening?'
          name='post'
          className='resize-none text-primary outline-none'
        ></textarea>
        <button className='ms-auto w-max rounded-full bg-accent/90 px-4 py-1.5 font-medium text-white outline-transparent duration-200 hover:bg-accent focus:bg-accent'>
          Post
        </button>
      </div>
    </form>
  )
}
