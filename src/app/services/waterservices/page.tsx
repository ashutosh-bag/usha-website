  "use client"
  
import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import WaterServices from '@/components/services/WaterServices'
import React from 'react'

export default function page() {
  return (
    <>
      <CommonBreadcrumb imageUrl='/assets/services/37.jpg'/>
      <WaterServices/>
    </>
  )
}
