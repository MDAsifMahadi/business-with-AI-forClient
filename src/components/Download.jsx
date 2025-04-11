import React, { useState } from 'react';
import { fadeIn } from "../lib/motion";
import { motion } from "framer-motion";

const Download = () => {
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const data = {text, email};
        console.log(data);
    }

  return (
    <section className="container py-5" id="download">
    <motion.h2 
      variants={fadeIn("down", 0.2, .3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once : false, amount : 0.7}}
    className="section-title gold-text text-center">Download gratis jouw exemplaar</motion.h2>
    <div className="divider"></div>
    <form className="mt-4 mx-auto" style={{ maxWidth: "500px" }} onSubmit={handleSubmit}>
      <div className="mb-3">
        <input 
            type="text" 
            className="form-control"
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder="Je naam" 
            required 
        />
      </div>
      <div className="mb-3">
        <input 
            type="email" 
            className="form-control"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="Je e-mailadres" 
            required 
        />
      </div>
      <button type="submit" className="btn btn-gold btn-lg w-100">Stuur mij het e-book</button>
    </form>
  </section>
  )
}

export default Download;
