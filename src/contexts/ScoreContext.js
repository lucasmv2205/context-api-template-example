import React, {
    createContext,
    useState,
  } from 'react'
  
  export const ScoreContext = createContext({})
  
  const ScoreProvider = ({ children }) => {
    const [gryffindorScore, setGryffindorScore] = useState(0);
    const [slytherinScore, setSlytherinScore] = useState(0);

    function handleIncreaseGryffindorScore(){
        setGryffindorScore((prevScore) => prevScore+1)
    }

    function handleIncreaseSlytherinScore(){
        setSlytherinScore((prevScore) => prevScore+1)
    }

    function handleDecreaseGryffindorScore(){
        setGryffindorScore((prevScore) => prevScore-1)
    }

    function handleDeacreaseSlytherinScore(){
        setSlytherinScore((prevScore) => prevScore-1)
    }

    function getScoreSum(){
        return gryffindorScore+slytherinScore
    }
  
    return (
      <ScoreContext.Provider
        value={{
            gryffindorScore,
            slytherinScore,
            handleIncreaseGryffindorScore,
            handleIncreaseSlytherinScore,
            getScoreSum,
            handleDecreaseGryffindorScore,
            handleDeacreaseSlytherinScore
        }}
      >
        {children}
      </ScoreContext.Provider>
    )
  }
  
  export { ScoreProvider }