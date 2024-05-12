import React from "react"
import Image from "next/image"
import { TiTick } from "react-icons/ti"
import Button from "@/components/ui/Button"

export default function Home() {
  return (
    <main>
      <section className="p-10 px-20 flex md:flex-row flex-col min-h-screen">
        <div className="mt-[10%]">
          <h1 className="md:text-8xl md:text-left text-6xl md:font-[200] font-bold tracking-tight text-center">Greetings</h1>
          <h1 className="md:text-6xl md:text-left text-4xl md:font-[200] font-bold tracking-tight text-center">We are [Shop Name]</h1>
          <h1 className="md:text-6xl md:text-left text-4xl md:font-[200] font-bold tracking-tight text-center">We offer high quality alpacas</h1>
          <ul className="p-5 space-y-2">
            <li className="flex items-center space-x-5">
              <TiTick className="text-card" size={30} />
              <p className="md:text-lg text-xl">Young alpacas raised by real farmers</p>
            </li>
            <li className="flex items-center space-x-5">
              <TiTick className="text-card" size={30} />
              <p className="md:text-lg text-xl">Different sizes for every individual{"'"}s choice</p>
            </li >
            <li className="flex items-center space-x-5">
              <TiTick className="text-card" size={30} />
              <p className="md:text-lg text-xl">Great quality and long lasting with a lot of benefits</p>
            </li>
            <li className="flex items-center space-x-5">
              <TiTick className="text-card" size={30} />
              <p className="md:text-lg text-xl">Young alpacas raised by real farmers</p>
            </li>
          </ul>
          <div className="flex m-5 space-x-5 items-center md:justify-start justify-center">
            <Button primary>Explore Our Collection</Button>
            <Button className="font-bold p-5" plain>Go to products</Button>
          </div>
        </div>
        <div className="flex-grow flex justify-center items-center">
          <Image width="500" height="500" src="/hero1.png" alt="hero1 image" />
        </div>
      </section>
    </main>
  )
}
