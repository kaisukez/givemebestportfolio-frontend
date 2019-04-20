import React from 'react'
import styled from 'styled-components'

import TwoColumnData from './TwoColumnData'

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

const whatToBuyMockupData = [
  ['ABC', 0.4],
  ['DEF', 0.3],
  ['GHI', 0.15],
  ['JKL', 0.07]
]

const performanceMockupData = [
  ['Return / Year', 0.25],
  ['Daily Return Std.', 0.13],
  ['Shrape Ratio', 1.38]
]

const optionsMockupData = {
  tickers: 'all',
  risk_factor: 0.5,
  risk_free_rate: 0.025,
  years: 5
}

const ResultCard = () => {
  const { tickers, risk_factor, risk_free_rate, years } = optionsMockupData
  return (
    <StyledResultCard>
      <StyledWhatToBuy>
        What to buy
        <TwoColumnData data={whatToBuyMockupData} />
      </StyledWhatToBuy>
      <StyledPerformance>
        Performance last {years} years
        <TwoColumnData data={performanceMockupData} />
      </StyledPerformance>
      <StyledOptions>
        tickers {tickers} | risk factor {risk_factor} | risk free rate {risk_free_rate * 100}%
      </StyledOptions>
    </StyledResultCard>
  )
}

export default ResultCard