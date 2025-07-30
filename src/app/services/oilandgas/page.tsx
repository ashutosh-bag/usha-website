'use client'

import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import OilAndGas from '@/components/services/OilAndGas'
import React from 'react'

export default function page() {
  return (
    <>
      <CommonBreadcrumb imageUrl='/assets/services/38.jpg'/>
      <OilAndGas/>
    </>
  )
}
