'use client'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Header() {
  return (
    <section className='bg-black hidden md:flex px-6 justify-between items-center h-14  '>
    

   <div className='flex text-white text-lg  gap-8'>
<FacebookIcon className='hover:text-green-500  '/>
<InstagramIcon className='hover:text-green-500  '/>
<LinkedInIcon className='hover:text-green-500 '/>
<TwitterIcon className='hover:text-green-500  '/>

   </div>

   <div className=' flex gap-7  text-white '>
<p className='cursor-pointer hover:text-green-500 text-sm font-mono'>corporate@ushaprojects.com</p>
<p className='hover:text-green-500 text-sm font-mono'>Usha House,House No-1,Surya Vihar patia </p>
   </div>

    
    </section>
  )
}
