type SidebarItemProps = {
  title: string
  children: React.ReactNode
}

export default function SidebarItem({ title, children }: SidebarItemProps) {
  return (
    <div className='m-6 rounded-lg border border-[#ccc] p-6 text-primary'>
      <h2 className='mb-4 font-bold'>{title}</h2>
      <div>
        <div className='space-y-4'>{children}</div>
      </div>
    </div>
  )
}
