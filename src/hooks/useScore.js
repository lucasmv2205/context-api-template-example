import { useContext } from "react"
import { ScoreContext } from "../contexts/ScoreContext"

function useScore() {
    const context = useContext(ScoreContext)
  
    if (!context) {
      throw new Error('useScore must be used within a ScoreProvider')
    }
  
    return context
  }
  
  export { useScore }
