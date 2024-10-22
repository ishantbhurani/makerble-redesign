export default function CreatePost() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log('submitted!')
  }

  return (
    <form onSubmit={handleSubmit} className='mb-6'>
      <div className='flex flex-col rounded-md border border-tertiary p-2 focus-within:border-secondary hover:border-secondary'>
        <textarea
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
