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
    <div className='group h-2 w-full overflow-hidden rounded-full bg-gray-200'>
      <div
        className='h-full rounded-full bg-accent/80 transition-all duration-200 group-hover:bg-accent'
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}
