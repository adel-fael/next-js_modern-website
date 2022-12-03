import Link from 'next/link'


const NavMobile = ({ navData }) => {
  return (
    <nav className="w-full p-4 bg-accent">
      {/* nav list  */}
      <ul className='flex flex-col gap-y-6 '>
        {navData.map((item, idx) => {
          // destructure item
          const { name, href } = item
          return (
            <li key={idx}>
              <Link href={href} className='text-white hover:text-accent'>{name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavMobile
