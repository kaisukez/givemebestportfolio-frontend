import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import WhatToBuyTable from './WhatToBuyTable'
import PerformanceTable from './PerformanceTable'

import { breakpoints } from '../constant'

const StyledResultCard = styled.div`
  display: grid;
  width: auto;
  height: auto;
  font-size: 1.1rem;
  min-height: 100vh;

  /* display: ${props => props.show ? 'grid' : 'none'}; */

  clip-path: ${ props => props.show ?
    'circle(100% at top 50vh left 50vw)' :
    'circle(0% at top 50vh left 50vw)'
  };

  transition: clip-path 0.5s ease-in;
  
  @media (min-width: ${breakpoints.mobile}px) {
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto;
  };
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  padding: 0.75em 0 0.75em 0;
  background-color: #cbdafc;
`

const WhatToBuyHeader = styled(Header)`
  grid-row: 1 / 2;
  
  @media (min-width: ${breakpoints.mobile}px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`

const PerformanceHeader = styled(Header)`
  grid-row: 3 / 4;

  @media (min-width: ${breakpoints.mobile}px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`

const BasicOutline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WhatToBuyContent = styled(BasicOutline)`
  background-color: #e7eeff;
`

const PerformanceContent = styled(BasicOutline)`
  background-color: #e7eeff;
`

const StyledOptions = styled.div`
  background-color: #bdd1ff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.mobile}px) {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const StyledOption = styled.div`
  /* padding: 1em 1.25em 1em 1.25em; */
  padding: 1em;
  text-align: center;
`

const StyledCloseButton = styled.div`
  position: fixed;
  font-size: 1.2em;
  right: 1em;
  top: 0.75em;
  cursor: pointer;
  color: black;
`

// const whatToBuyMockupData = [
//   ['ABC', 0.4],
//   ['DEF', 0.3],
//   ['GHI', 0.15],
//   ['JKL', 0.07],
//   ['JKL', 0.07],
//   ['JKL', 0.07],
//   ['JKL', 0.07],
//   ['JKL', 0.07],
//   ['JKL', 0.07],
// ]

// const performanceMockupData = [
//   ['Return / Year', 0.2514],
//   ['Daily Return Std.', 0.1374],
//   ['Shrape Ratio', 1.3894]
// ]

// const nasdaqMockupData = [
//   ['Return / Year', 0.1057],
//   ['Daily Return Std.', 0.2442],
//   ['Shrape Ratio', 0.5578]
// ]

// const optionsMockupData = {
//   tickers: 'All',
//   risk_factor: 0.5,
//   risk_free_rate: 0.025,
//   years: 5
// }

const renderTickers = tickers => {
  if (tickers === 'All')
    return tickers
  
  let result = '['
  tickers.sort().forEach((ticker, i) => {
    result += ticker
    if (i < tickers.length - 1)
      result += ', '
  })
  result += ']'
  return result
}

const ResultCard = props => {
  const { nasdaq_index } = props.data
  const nasdaqData = [
    ['Return / Year', nasdaq_index.return],
    ['Daily Return Std.', nasdaq_index.std],
    ['Shrape Ratio', nasdaq_index.sharpe]
  ]
  
  const { portfolio } = props.data
  const performanceData = [
    ['Return / Year', portfolio.return],
    ['Daily Return Std.', portfolio.std],
    ['Shrape Ratio', portfolio.sharpe]
  ]
  
  // const { tickers, risk_factor, risk_free_rate, years } = optionsMockupData
  const { tickers, risk_factor, risk_free_rate, years } = props.data.options

  const { show } = props

  return (
    <StyledResultCard show={show}>
      <WhatToBuyHeader>What to buy</WhatToBuyHeader>
      <PerformanceHeader>Performance last {years} years</PerformanceHeader>
      <WhatToBuyContent>
        <WhatToBuyTable
          data={portfolio.what_to_buy}
          // data={whatToBuyMockupData}
        />
      </WhatToBuyContent>
      <PerformanceContent>
        <PerformanceTable
          data={performanceData}
          nasdaqData={nasdaqData}
          // data={performanceMockupData}
          // nasdaqData={nasdaqMockupData}
        />
      </PerformanceContent>
      <StyledOptions>
        <StyledOption>Tickers : {renderTickers(tickers)}</StyledOption>
        <StyledOption>Risk factor : {risk_factor}</StyledOption> 
        <StyledOption>Risk free rate : {risk_free_rate * 100}%</StyledOption>
        <StyledOption>Years : {years}</StyledOption>
      </StyledOptions>
      <StyledCloseButton
        onClick={() => props.close()}
      >
        <FontAwesomeIcon icon={faTimes} />
      </StyledCloseButton>
    </StyledResultCard>
  )
}

export default ResultCard