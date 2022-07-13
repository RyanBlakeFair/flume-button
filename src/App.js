import React from 'react'
import cx from 'classnames'
import { motion } from "framer-motion";

import './css/styles.css'

import Button from './components/button'

function Card({ emoji, hueA, hueB, flip, videoMode }) {
  const hue = (h) => `hsl(${h}, 100%, 50%)`;
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <div className={cx('container', {
      'flip-x': flip,
    })}>
      <motion.div className="card-container">
        <div className="splash" style={{ background }} />
        <Button videoMode={videoMode} flip={flip}>
          {emoji}
        </Button>
      </motion.div>
    </div>
  );
}

export default function App() {

  const cards = [
    { emoji: "📸", hueA: 260, hueB: 290, flip: false, videoMode: false },
    { emoji: "🎥", hueA: 260, hueB: 290, flip: true, videoMode: true },
  ]

  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center px-gutter bg-navy overflow-hidden'>
      <div><h1 className='text-white font-bold text-10xl md:text-13xl'>👇 Pick one 👇</h1></div>
      <div className='flex flex-col lg:flex-row gap-x-12 justify-evenly items-center w-full mt-12'>
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </div>
  )
}
