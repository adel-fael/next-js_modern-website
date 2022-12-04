import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInLeft, fadeInRight, staggerTextContainer } from '../variants'

const How = ({ howData }) => {
  // destructure how data
  const { title, subtitle, girlImg } = howData

  return (
    <section id="how-to" className="mb-[60px] lg:mb-[160px] ">
      <div
        
        className="container mx-auto "
      >
        <motion.div variants={staggerTextContainer}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: false, amount: 0.6 }} className="flex flex-col items-center lg:flex-row gap-x-10">
          {/* image  */}
          <motion.div variants={fadeInRight} className="flex-1">
            <Image src={girlImg} width={720} height={678} />
          </motion.div>
          {/* text  */}
          <motion.div variants={fadeInLeft} className="flex justify-end flex-1">
            <div className="max-w-[455px]">
              <h3 className="h3">{title}</h3>
              <p className="lead">{subtitle}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default How
