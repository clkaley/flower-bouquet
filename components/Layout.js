import React from 'react'
import Link from 'next/link'
import Content from './Content';
import { useContext } from 'react';
import CartContext from '../context/basketContext';
import { useBasket } from '../context/basketContext';



const Layout = ({children}) => {
  const {items}=useBasket()
  

//console.log(children);
  return (
    <>
        <nav className=' flex-col bg-neutral-50 flex items-center h-2 p-6 md:p-4 lg:p-12 sticky backdrop-blur-lg z-40 top-0  w-full leading-none gap- antialiased transition shadow-sm justify-center' >
            <div className="flex gap-4 text-xs text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-pink-400 to-purple-600  sm:text-2xl ">
              
                <Link href="/">
                <a href="" className='mx-2'>Flower Bouquet</a>
               
                </Link>

                <Link href="/collections">
                    <a href="">Flower Types
</a>
                </Link>
                <Link href="/products">
                    <a href="">Flowers</a>
                </Link>
                <Link href="/cart">
                  <a href="">
                  Cart ({items.length})
                  </a>
                </Link>
                <Link href="/login">
                  <a href="">
                  Login
                  </a>
                </Link>
            </div>
            
        
    </nav>
    
        <main >
            {children}        
        </main>
  
    </>
  )
}


export default Layout