'use client'

import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import Industrial from '@/components/services/Industrial'
import React from 'react'

export default function page() {
  return (
    <>
      <CommonBreadcrumb imageUrl='/assets/services/industrialwork.jpg'/>
      <Industrial/>
    </>
  )
}
