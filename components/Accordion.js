import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { fadeInRight } from '../variants'
// import icons
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi'

const Accordion = ({ accordion }) => {
  // accordion state
  const [isOpen, setIsOpen] = useState(false)
  // destructure accordion data
  const { question, answer } = accordion
  return (
    <AnimatePresence
            
            initial={false}
 
            exitBeforeEnter={true}
          
            onExitComplete={() => null}
    >
      <motion.div variants={fadeInRight} className="max-w-[550px]">
        <button
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          className="drop-shadow-primary bg-white rounded-[10px] h-[90px] px-[35px] flex items-center text-left w-[100%]"
        >
          <div className="w-full flex justify-between items-center">
            {/* title  */}
            <p className="lead font-medium leading-snug max-w-[400px]">
              {question}
            </p>
            {/* icons  */}
            <div className="transition-all duration-500">
              {isOpen ? (
                <motion.div
                  initial="initial"
                  animate={{
                    rotate: 180,
                  }}
                >
                  <HiOutlineMinus className="text-[28px] text-accent" />
                </motion.div>
              ) : (
                <motion.div
                  initial="initial"
                  animate={{
                    rotate: 0,
                  }}
                >
                  <HiOutlinePlus className="text-[28px] text-accent" />
                </motion.div>
              )}
            </div>
          </div>
        </button>
        {/* answer  */}
        <div
          className={`${
            isOpen
              ? 'max-h-[160px] p-8 bg-[#fff7f5] rounded-[10px] drop-shadow-primary my-2'
              : 'max-h-0'
          } h-[160px] overflow-hidden transition-all`}
        >
          <p className="lead leading-[30px] mt-2">{answer}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Accordion
