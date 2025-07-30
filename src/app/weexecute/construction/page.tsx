'use client'

import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import Construction from '@/components/weexecute/Construction'
import React from 'react'

export default function page() {
  return (
    <>
      <CommonBreadcrumb imageUrl='/assets/construction/45.jpg'/>
      <Construction/>
    </>
  )
}
