"use client"
import RecruitmentPolicy from '@/components/career/RecruitmentPolicy'
import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import React from 'react'

export default function page() {
  return (
    <>
    <CommonBreadcrumb imageUrl='/assets/recruitmentpolicy/imgi_2_24.jpg' />
      <RecruitmentPolicy/>
    </>
  )
}
