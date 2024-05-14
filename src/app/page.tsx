import React from "react"
import Image from "next/image"
import { TiTick } from "react-icons/ti"
import Button from "@/components/ui/Button"
import ProductHeroCard from "@/components/products/ProductHeroCard"
import ProductHeroMoreCard from "@/components/products/ProductHeroMoreCard"

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

      <section className="min-h-screen p-5 space-y-10">
        <h1 className="text-6xl text-secondary/[0.8]">Our <span className="text-card">Products</span></h1>
        <div className="grid gap-5 p-10 md:grid-cols-4 grid-cols-1 w-full">
          <ProductHeroCard image="/product-images/p1.png" title="Alpaca 1" description="An awesome alpaca" price={24} currency="en-US" />
          <ProductHeroCard image="/product-images/p1.png" title="Alpaca 1" description="An awesome alpaca" price={24} currency="en-US" />
          <ProductHeroCard image="/product-images/p1.png" title="Alpaca 1" description="An awesome alpaca" price={24} currency="en-US" />
          <ProductHeroCard image="/product-images/p1.png" title="Alpaca 1" description="An awesome alpaca" price={24} currency="en-US" />
          <ProductHeroCard image="/product-images/p1.png" title="Alpaca 1" description="An awesome alpaca" price={24} currency="en-US" />
          <ProductHeroCard image="/product-images/p1.png" title="Alpaca 1" description="An awesome alpaca" price={24} currency="en-US" />
          <ProductHeroCard image="/product-images/p1.png" title="Alpaca 1" description="An awesome alpaca" price={24} currency="en-US" />
          <ProductHeroMoreCard />
        </div>
      </section>

      <section>
        
      </section>
    </main>
  )
}
