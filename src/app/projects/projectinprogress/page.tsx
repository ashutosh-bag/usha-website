"use client"
import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import ProjectInProgress from '@/components/projects/ProjectInProgress'
import React from 'react'

export default function page() {
  return (
    <>
    <CommonBreadcrumb imageUrl='/assets/projectinprogress/17.jpg' />
     <ProjectInProgress/> 
    </>
  )
}
