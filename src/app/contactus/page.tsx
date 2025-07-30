'use client'

import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import ContactUsPage from '@/components/contactus/ContactUsPage'
import React from 'react'

export default function page() {
  return (
    <>
      <CommonBreadcrumb imageUrl='/assets/contactus/30.jpg'/>
      <ContactUsPage/>
    </>
  )
}
