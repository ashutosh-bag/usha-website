'use client'

import ClientTestimonials from '@/components/clients/ClientTestimonials'
import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import React from 'react'

export default function page() {
  return (
    <>
      <CommonBreadcrumb imageUrl='/assets/clients/50.jpg'/>
      <ClientTestimonials/>
    </>
  )
}
