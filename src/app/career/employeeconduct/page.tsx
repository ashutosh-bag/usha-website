"use client"
import EmployeeConduct from '@/components/career/EmployeeConduct'
import CommonBreadcrumb from '@/components/commonbreadcrumb/CommonBreadcrumb'
import React from 'react'

export default function page() {
  return (
    <>
    <CommonBreadcrumb imageUrl='/assets/employeeconduct/imgi_2_49.jpg' />
      <EmployeeConduct/>
    </>
  )
}
