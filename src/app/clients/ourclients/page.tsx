'use client'

import OurClients from '@/components/clients/OurClients'
import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import React from 'react'

export default function page() {
  return (
    <>
      <CommonBreadcrumb imageUrl='/assets/clients/23.jpg'/>
      <OurClients/>

    </>
  )
}
