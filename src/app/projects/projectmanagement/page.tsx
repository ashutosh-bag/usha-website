"use client"
import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import ProjectManagement from '@/components/projects/ProjectManagement'
import React from 'react'

export default function page() {
  return (
    <>
    <CommonBreadcrumb imageUrl='/assets/projectmanagement/imgi_2_19.jpg' />
      <ProjectManagement/>
    </>
  )
}
