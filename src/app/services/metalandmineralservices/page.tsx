'use client'

import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import MetalAndMireralServices from '@/components/services/MetalAndMireralServices'
import React from 'react'

export default function page() {
  return (
    <>
      <CommonBreadcrumb imageUrl='/assets/services/42.jpg'/>
      <MetalAndMireralServices/>
    </>
  )
}
