// import components
import About from '../components/About'
import Copyright from '../components/Copyright'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import How from '../components/How'
import Testimonials from '../components/Testimonials'

// import data
import {
  aboutData,
  faqData,
  footerData,
  headerData,
  heroData,
  howData,
  navData,
  testimonialData,
} from '../data.json'

const Home = ({
  aboutData,
  faqData,
  footerData,
  headerData,
  heroData,
  howData,
  navData,
  testimonialData,
}) => {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-page">
      <Hero headerData={headerData} heroData={heroData} navData={navData} />
      <About aboutData={aboutData} />
      <How howData={howData}/>
      <Faq faqData={faqData} />
      <Testimonials testimonialData={testimonialData}/>
      <Footer footerData={footerData}/>
      <Copyright />
    </div>
  )
}

// fetch data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      heroData,
      aboutData,
      faqData,
      footerData,
      howData,
      navData,
      testimonialData,
    },
  }
}

export default Home
