"use client"
import React, {useState} from 'react'

type CarouselProps = {
    mapping: (start: number, end: number) => React.ReactElement,
    elementsCount: number,
    inView: number
}

function Carousel({ mapping, inView, elementsCount }: CarouselProps) {
    const [start, setStart] = useState<number>(0)
  return (
    <section className='carousel w-full h-full flex'>
        {mapping(start, start + inView)}
    </section>
  )
}

export default Carousel