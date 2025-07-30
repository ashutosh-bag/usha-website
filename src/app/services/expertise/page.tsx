'use client'

import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import Expertise from '@/components/services/Expertise'
import React from 'react'

export default function page() {
  return (
    <>
      <CommonBreadcrumb imageUrl='/assets/services/16.jpg'/>
      <Expertise/>
    </>
  )
}
