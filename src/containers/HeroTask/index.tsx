import React from 'react'

import { Input } from './components/Input'
import { Stats } from './components/Stats'
import { Tasks } from './components/Tasks'
import { ThemeProvider, GlobalStyles, Page } from './components/theme'
import { Header } from './components/Header'

const HeroTask = () => {
  return (
    <ThemeProvider darkMode={true}>
      <GlobalStyles />
      <Page>
        <Header />
        <Stats />
        <Tasks />
        <Input />
      </Page>
    </ThemeProvider>
  )
}

export default HeroTask
