import React from 'react'

import { ScoreProvider } from './ScoreContext'

const AppProvider = ({ children }) => (
      <ScoreProvider>{children}</ScoreProvider>
)

export default AppProvider