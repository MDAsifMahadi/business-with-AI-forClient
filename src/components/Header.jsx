import { useState,useEffect } from "react";
import { fadeIn } from "../lib/motion";
import { motion } from "framer-motion";

const Header = () => {

  const [small, setSmall] = useState(false);

  useEffect(()=> {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setSmall(true);
      } else {
        setSmall(false)
      } 
    })
  }, [])


  return (
  <>
    <header className="hero animate__animated animate__fadeInDown overflow-hidden relative h-[375px]">
      <div className="hole absolute left-1/2 transform -translate-x-1/2  w-[60rem] h-[70rem] rounded-full bg-[#d4af37] border-1 border-[#d4af37] blur-2xl my-anim"></div>

      <div
      className="hole absolute left-1/2 transform -translate-x-1/2  w-[70rem] h-[70rem] rounded-full bg-black border-1 border-[#d4af37] shadow-2xl"></div>

      
      <div className="header_text_fild absolute z-50 w-full">
        <div>
          <motion.h1 
          
          variants={fadeIn("down", 0.2, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once : false, amount : 0.7}}

          className="section-title">Laat je bedrijf groeien met AI en ChatGPT</motion.h1>
          <motion.p 
          
          variants={fadeIn("right", 0.2, 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : false, amount : 0.7}}
          
          className="lead">Ontvang ons gratis e-book en ontdek hoe AI je onderneming kan transformeren</motion.p>
          <a href="#download" className="btn btn-gold btn-lg mt-4">Download gratis e-book</a>
        </div>
      </div>
      <div className="bg-amber-50/70 w-full h-2 absolute z-50 bottom-0 blur-2xl"></div>
    </header>

    {<header className={`nav w-full bg-[#d4af37]/50 backdrop-blur-lg  fixed ${small ? "top-0" : "-top-50"} z-100 duration-300`}>
      <div className="max-w-[1250px] mx-auto flex items-center justify-between">
        <div className="text-center ml-1">
          <h1 className="section-title-onScroll">Laat je bedrijf groeien met AI en ChatGPT</h1>
          <p className="lead section-desc-onScroll">Ontvang ons gratis e-book en ontdek hoe AI je onderneming kan transformeren</p>
        </div>
        <a href="#download" className="btn btn-gold btn-lg m-4">Download gratis e-book</a>
      </div>
    </header>}
  </>
  )
};
export default Header;


