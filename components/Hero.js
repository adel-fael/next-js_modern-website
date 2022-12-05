//import next image
import Image from 'next/image'
//import components
import Header from './Header'
//import motion
import { motion } from 'framer-motion'
//import variants
import {
  boyAnim,
  fadeInDown,
  girlAnim,
  heroTruckAnim,
  staggerContainer,
} from '../variants'

const Hero = ({ headerData, heroData, navData }) => {
  // destructure hero data
  const { title, boyImg, girlImg, truckImg, btnText } = heroData
  return (
    <section className="bg-hero bg-no-repeat bg-left-top min-h-[800px] lg:min-h-[950px] lg:mb-80">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto relative min-h-[800px] lg:min-h-[950px] "
      >
        
        {/* header */}
        <motion.div variants={fadeInDown}>
          <Header headerData={headerData} navData={navData} />
        </motion.div>

        {/* title */}
        <motion.h1
          variants={fadeInDown}
          className="h1 max-w-[740px] text-white pt-[12rem] mb-[60px] "
        >
          {title}
        </motion.h1>
        
        {/* button */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          variants={fadeInDown}
          className="btn"
        >
          {btnText}
        </motion.button>

        {/* girl image */}
        <motion.div
        variants={girlAnim} 
        className="absolute bottom-0 hidden lg:flex">
          <Image src={girlImg} width={206} height={495} alt="girl Image sketch"/>
        </motion.div>
        
        {/* truck image */}
        <motion.div 
        variants={heroTruckAnim} 
        className="absolute hidden -bottom-[25%] -left-[30%] lg:flex ">
          <Image src={truckImg} width={811} height={395} alt="truck Image sketch" />
        </motion.div>

        {/* boy image */}
        <motion.div variants={boyAnim} className="absolute hidden right-[380px] bottom-0 lg:flex z-10">
          <Image src={boyImg} width={206} height={495} alt="boy Image sketch"/>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
