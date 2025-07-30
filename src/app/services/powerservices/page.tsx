"use client"

import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import PowerServices from '@/components/services/PowerServices'
import React from 'react'

export default function page() {
  return (
    <>
      <CommonBreadcrumb imageUrl='/assets/services/36.jpg' />
      <PowerServices/>
    </>
  )
}
