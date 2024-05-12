import React from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

function Navbar() {
    return (
        <header className="bg-primary/[0.4] p-4 h-full">
            <nav className="flex space-x-5 items-center">
                <Link className="font-bold text-xl text-text" href="/">
                    [Shop Name]
                </Link>
                <ul className='flex-grow flex text-text space-x-20 font-[500] text-lg justify-end items-center'>
                    <div className='md:flex space-x-5 hidden'>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/offers">Offers</Link></li>
                        <li><Link href="/about">About us</Link></li>
                    </div>
                    <li>
                        <Link href="/login">
                            <Button className='px-6 py-2'>
                                Login
                            </Button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar