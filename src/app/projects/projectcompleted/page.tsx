"use client"
import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import ProjectCompleted from '@/components/projects/ProjectCompleted'
import React from 'react'

export default function page() {
  return (
    <>
    <CommonBreadcrumb imageUrl='/assets/projectcompleted/imgi_2_18.jpg' />
      <ProjectCompleted/>
    </>
  )
}
