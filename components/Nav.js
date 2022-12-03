import Link from 'next/link'

const Nav = ({ navData, headerState }) => {
  return (
    <nav className='flex items-center'>
      <ul className='flex gap-[96px]'>
        {navData.map((item, idx) => {
          // destructure item
          const { name, href } = item
          return (
            <li key={idx}>
              <Link
                href={href}
                className={`${
                  headerState ? 'text-primary' : 'text-white'
                } hover:text-accent-hover transition`}
              >
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
