"use client"
import CurrentOpenings from '@/components/career/CurrentOpenings'
import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import React from 'react'

export default function page() {
  return (
    <>
    <CommonBreadcrumb imageUrl='/assets/currentopenings/imgi_2_29.jpg' />
      <CurrentOpenings/>
    </>
  )
}
