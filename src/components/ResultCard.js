import React from 'react'
import styled from 'styled-components'

const StyledResultCard = styled.div`
  display: grid;
  width: auto;
  height: auto;
  
  @media (min-width: 701px) {
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
  }
`

const StyledWhatToBuy = styled.div`
  background-color: red;
`

const StyledPerformance = styled.div`
  background-color: green;
`

const StyledOptions = styled.div`
  background-color: blue;
  
  @media (min-width: 701px) {
    grid-column: 1 / 3;
  }
`

const ResultCard = () => {
  return (
    <StyledResultCard>
      <StyledWhatToBuy>
        What to buy
      </StyledWhatToBuy>
      <StyledPerformance>
        Performance last 5 years
      </StyledPerformance>
      <StyledOptions>
        tickers All | risk factor 0.5 | risk free rate 2.5%
      </StyledOptions>
    </StyledResultCard>
  )
}

export default ResultCard