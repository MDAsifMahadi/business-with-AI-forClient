import Download from './components/Download'
import Footer from './components/Footer'
import Header from './components/Header'
import shopIcon from "./assets/shop.png"
import tagIcon from "./assets/tag.svg"
import {motion} from "framer-motion"
import {fadeIn} from "./lib/motion";

function App() {
  
  return (
  <div 
    
  className='absolute w-full bg-black  opacity-100 "'>

    {/* bg-[length:40px_40px] bg-[linear-gradient(to_right,#ffd7001a_1px,transparent_1px),linear-gradient(to_bottom,#ffd7001a_1px,transparent_1px)] */}
    
    <Header />

    {/* ==== sections ==== */}

    <section className ="container text-center py-5" >
    <motion.h2 
      variants={fadeIn("right", 0.2, 1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once : false, amount : 0.7}}
      className="section-title gold-text"
    >
      Wat je zal leren
    </motion.h2>
    <motion.div className="divider" 
      variants={fadeIn("left", 0.1, 1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once : false, amount : 0.7}}
    ></motion.div>

    <div className="row mt-4 g-4 ">
      <div className="col-md-4"
      
        variants={fadeIn("right", 0.2, .5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : false, amount : 0.7}}

      >
        <div className="icon-box">
          <motion.img 
            variants={fadeIn("down", 0.2, .3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once : false, amount : 0.7}}

          className='mx-auto' src={tagIcon} width="60" alt="workflow icon" />
          <h5>Slimmere workflows</h5>
          <p>Automatiseer repetitieve taken en win kostbare tijd.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="icon-box">
          <motion.img 
          
            variants={fadeIn("down", 0.2, .3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once : false, amount : 0.7}}
          
          className='mx-auto' src="https://cdn-icons-png.flaticon.com/512/427/427735.png" width="60" alt="content icon" />
          <h5>ChatGPT voor content</h5>
          <p>Creëer razendsnel waardevolle inhoud zonder externe copywriters.</p>
        </div>
      </div>

      <div 
      
        variants={fadeIn("left", 0.2, .5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : false, amount : 0.7}}
      
      className="col-md-4">
        <div className="icon-box">
          <motion.img 
          
            variants={fadeIn("down", 0.2, .3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once : false, amount : 0.7}}
          
          className='mx-auto' src={shopIcon} width="60" alt="growth icon" />
          <h5>Groei je omzet</h5>
          <p>Gebruik AI om je verkoopproces te optimaliseren en meer leads te genereren.</p>
        </div>
      </div>
    </div>
    <a href="#download" className="btn btn-gold btn-lg mt-5">Download nu het e-book</a>
  </section>

  <section className="container trust-badges bg-[#d4af37]/20 backdrop-blur-xs">
    <motion.h2 
    
      variants={fadeIn("down", 0.2, .5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once : false, amount : 0.7}}

    className="section-title gold-text">Vertrouwd door professionals</motion.h2>
    <div className="divider"></div>
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="Trust badge 1" />
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png" alt="Trust badge 2" />
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Trust badge 3" />
      <img src="https://cdn-icons-png.flaticon.com/512/888/888879.png" alt="Trust badge 4" />
    </div>
  </section>

  <section className="container py-5">
    <h2 className="section-title gold-text text-center">Veelgestelde vragen</h2>
    <motion.div 
    
      variants={fadeIn("right", 0.2, .3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once : false, amount : 0.7}}
    
    className="divider"></motion.div>


    <motion.div 
      variants={fadeIn("left", 0.2, .5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once : false, amount : 0.7}}
    className="faq bg-[#d4af37]/20 backdrop-blur-xs text-white">
      <h5>Is dit e-book echt gratis?</h5>
      <p>Ja, volledig gratis. Je hoeft enkel je e-mailadres achter te laten.</p>
    </motion.div>
    <motion.div 
      variants={fadeIn("left", 0.2, .5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once : false, amount : 0.7}}
    
    className="faq bg-[#d4af37]/20 backdrop-blur-xs text-white">
      <h5>Voor wie is dit e-book bedoeld?</h5>
      <p>Voor elke ondernemer of freelancer die efficiënter en slimmer wil werken met behulp van AI.</p>
    </motion.div>
    <motion.div 
        variants={fadeIn("left", 0.2, .5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : false, amount : 0.7}}
    className="faq bg-[#d4af37]/20 backdrop-blur-xs text-white">
      <h5>Wat als ik al met AI werk?</h5>
      <p>Ook dan haal je waardevolle inzichten en praktische toepassingen uit dit e-book.</p>
    </motion.div>
  </section>

  <section className="lux-bg py-5 relative overflow-hidden border-y-1 border-[#d4af37] ">
    <div>
      <div className="container">
        <h2 className="section-title text-center gold-text mb-4">Wat anderen zeggen</h2>
        <motion.div 
            variants={fadeIn("left", 0.2, .3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once : false, amount : 0.7}}
        className="divider"></motion.div>
        <motion.div
            variants={fadeIn("left", 0.2, .5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once : false, amount : 0.7}}
        className="testimonial animate__animated animate__fadeInUp">
          <p>“Dankzij dit e-book heb ik mijn marketing volledig kunnen automatiseren. Het voelt alsof ik een extra werknemer heb.”</p>
          <small>- Sophie, zaakvoerder marketingbureau</small>
        </motion.div>
        <motion.div
            variants={fadeIn("left", 0.2, .5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once : false, amount : 0.7}}
        className="testimonial animate__animated animate__fadeInUp animate__delay-1s">
          <p>“De tips over ChatGPT bespaarden mij tientallen uren. En het beste? Het werkt écht!”</p>
          <small>- Jan, freelancer</small>
        </motion.div>
      </div>
    </div>

    <div className="absolute left-10 sm:left-20 md:left-50 lg:left-100 xl:left-150 w-[60rem] h-[70rem] rounded-full bg-[#d4af37]/50 border-1 border-[#d4af37] blur-2xl my-anim"></div>
  </section>

    <Download />
    <Footer />
  </div>
  )
}

export default App
