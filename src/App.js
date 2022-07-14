import React from 'react'
import { motion } from "framer-motion";

import './css/styles.css'

import Button from './components/button'

function Card({ emoji, videoMode }) {
  const hue = (h) => `hsl(${h}, 100%, 50%)`;
  const background = `linear-gradient(306deg, ${hue(260)}, ${hue(290)})`;

  return (
    <div className='container'>
      <motion.div className="card-container">
        <div className="splash rounded-2xl" style={{ background }} />
        <Button videoMode={videoMode}>
          {emoji}
        </Button>
      </motion.div>
    </div>
  );
}

export default function App() {

  const cards = [
    { emoji: "📸", videoMode: false },
    { emoji: "🎥", videoMode: true },
  ]

  return (
    <div className='w-full flex flex-col items-center justify-center px-gutter bg-navy overflow-hidden min-h-screen py-12'>
      <div><h1 className='text-white font-bold text-10xl md:text-13xl'>👇 Pick one 👇</h1></div>
      <div className='flex flex-col lg:flex-row gap-x-12 justify-evenly items-center w-full mt-12'>
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </div>
  )
}
