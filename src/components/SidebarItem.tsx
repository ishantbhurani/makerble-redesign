type SidebarItemProps = {
  title: string
  children: React.ReactNode
}

export default function SidebarItem({ title, children }: SidebarItemProps) {
  return (
    <div className='m-6 border border-[#ccc] p-6 rounded-lg text-primary'>
      <h2 className='font-bold mb-4'>{title}</h2>
      <div>
        <div className='space-y-4'>{children}</div>
      </div>
    </div>
  )
}
