import { useEffect, useState } from 'react'

type ProgressProps = {
  value: number
}

export default function Progress({ value }: ProgressProps) {
  const [progress, setProgress] = useState(5)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='bg-gray-200 w-full h-2 rounded-full overflow-hidden group'>
      <div
        className='bg-accent/80 group-hover:bg-accent duration-200 h-full rounded-full transition-all'
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}
