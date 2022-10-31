import React, {
    createContext,
    useState,
  } from 'react'
  
  export const ScoreContext = createContext({})
  
  const ScoreProvider = ({ children }) => {
    const [teamA, setTeamA] = useState(0);
    const [teamB, setTeamB] = useState(0);

    function handleIncreaseTeamAScore(){
        setTeamA((prevScore) => prevScore+1)
    }

    function handleIncreaseTeamBScore(){
        setTeamB((prevScore) => prevScore+1)
    }

    function handleDecreaseTeamAScore(){
      setTeamA((prevScore) => prevScore-1)
  }

    function handleDecreaseTeamBScore(){
        setTeamB((prevScore) => prevScore-1)
    }

    function getScoreSum(){
        return teamA+teamB
    }
  
    return (
      <ScoreContext.Provider
        value={{
          teamA,
          setTeamA,
          teamB,
          setTeamB,
          handleIncreaseTeamAScore,
          handleIncreaseTeamBScore,
          handleDecreaseTeamAScore,
          handleDecreaseTeamBScore,
          getScoreSum
        }}
      >
        {children}
      </ScoreContext.Provider>
    )
  }
  
  export { ScoreProvider }