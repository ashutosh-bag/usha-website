'use client'

import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import Procurement from '@/components/weexecute/Procurement'
import React from 'react'

export default function page() {
  return (
    <>
      <CommonBreadcrumb imageUrl='/assets/construction/45.jpg'/>
      <Procurement/>
    </>
  )
}
