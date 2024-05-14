import React from 'react'
import Image from 'next/image'
import Button from '../ui/Button'

type ProductHeroCardProps = {
    image: string,
    title: string,
    description: string,
    price: number,
    currency: string
}

function ProductHeroCard({ image, title, description, price, currency }: ProductHeroCardProps) {
    return (
        <div className="h-80 w-80 bg-primary/[0.4] rounded-md shadow-text/[0.4]">
            <header className='absolute h-0'>
                <h3 className='relative top-5 left-5 text-xl font-bold'>{title}</h3>
                <p className='relative top-5 left-5'>{description}</p>
            </header>
            <Image className='w-full relative left-10 -z-10' src={image} width="200" height="200" alt={`product-image-${title}`} />
            <p className='relative bottom-10 left-5'>{new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(price)}</p>
            <Button primary className='px-5 relative z-10 bottom-20 left-[65%]'>Buy Now</Button>
        </div>
    )
}

export default ProductHeroCard