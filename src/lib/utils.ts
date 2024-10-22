import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(fullname: string) {
  return fullname
    ?.match(/\b([a-zA-Z])/g)
    ?.map((ch) => ch.toUpperCase())
    .join('')
}
