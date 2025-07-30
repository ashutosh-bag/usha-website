'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import components with SSR turned off
const CommonBreadcrumb = dynamic(() => import('@/components/commonbreadcrumb/CommonBreadcrumb'), {
  ssr: false,
});
const QualityServices = dynamic(() => import('@/components/weexecute/QualityServices'), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <CommonBreadcrumb imageUrl="/assets/qualityservice/41.jpg" />
      <QualityServices />
    </>
  );
}
