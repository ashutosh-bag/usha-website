 "use client"
import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
 import ChsAhp from '@/components/services/ChsAhp'
import React from 'react'

export default function page() {
  return (
    <>
    <CommonBreadcrumb imageUrl='/assets/ahpchs/img11.jpeg' />
      <ChsAhp/>
    </>
  )
}
