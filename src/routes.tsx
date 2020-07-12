import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { HeroTask, DesignTool } from 'containers'

export default () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<HeroTask />} />
        <Route path='/tool' element={<DesignTool />} />
      </Routes>
    </Suspense>
  )
}
