import React from 'react'

const HeroTask = React.lazy(() =>
  import(/* webpackChunkName: "hero_task" */ './HeroTask')
)
const DesignTool = React.lazy(() =>
  import(/* webpackChunkName: "design_tool" */ './DesignTool')
)

export { HeroTask, DesignTool }
