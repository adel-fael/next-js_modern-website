import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import icons
import { HiMenu } from 'react-icons/hi'
// import components
import Nav from './Nav'
import NavMobile from './NavMobile'

const Header = ({ headerData, navData }) => {
  const router = useRouter()
  // header state
  const [headerState, setHeaderState] = useState(false)
  // navMobile state
  const [navMobileState, setNavMobileState] = useState(false)

  // destructure header data
  const { logoImgV1, logoImgV2, btnText } = headerData

  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // set the header state according to scrollY position
      window.scrollY > 80 ? setHeaderState(true) : setHeaderState(false)
    })

    //! come back later try it without the dependency array
  }, [headerState])

  return (
    <header
      className={`${
        headerState
          ? 'bg-white p-3 rounded-md drop-shadow-primary '
          : 'py-[40px]'
      } fixed w-full left-0 right-0 mx-auto max-w-[90vw] lg:max-w-[1120px] z-20 flex justify-between items-center transition-all duration-500`}
    >
      {/* Logo v1 */}
      <Link href={'/'}>
        <Image
          src={`${headerState ? logoImgV2 : logoImgV1}`}
          width={`${headerState ? 180 : 212}`}
          height={50}
        />
      </Link>
      {/* nav & button wrapper - initially hidden */}
      <div className="hidden lg:flex gap-x-[96px]">
        {/* nav */}
        <Nav navData={navData} headerState={headerState} />
        {/* button */}
        <button className="btn" onClick={()=>{
          router.push('#contact-us')
        }}>{btnText}</button>
      </div>
      {/* nav menu button - hide on large screens */}
      <button
        className="lg:hidden"
        onClick={() => setNavMobileState(!navMobileState)}
      >
        <HiMenu className="text-4xl text-accent-hover" />
      </button>
      {/* nav menu mobile - hide on large screens  */}
      <div
        className={`${
          navMobileState ? 'max-h-[154px]' : 'max-h-0'
        } lg:hidden absolute top-full mt-2 w-full left-0 rounded-md overflow-hidden shadow-2xl transition-all`}
      >
        <NavMobile navData={navData} />
      </div>
    </header>
  )
}

export default Header
