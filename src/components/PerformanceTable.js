import React from 'react'
import styled from 'styled-components'

import {
  Value,
  PercentValue,
  DifferentValue,
  DifferentPercentValue
} from './Value'
import percentValue from '../helpers/percentValue'

const StyledPerformanceTable = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`

const plusSign = value => {
  return value > 0 ? '+' : ''
}

const PerformanceTable = props => {
  const { data, nasdaqData } = props
  return (
    <StyledPerformanceTable>
      {data.map((row, index) => {
        return(
          <React.Fragment key={`performance-${index}`}>
            <Value>{row[0]}</Value>
            { index < 2 ?
                <PercentValue>{percentValue(row[1])}</PercentValue> :
                <Value>{row[1]}</Value>
            }
            {(() => {
              const diffPercentValue = row[1] - nasdaqData[index][1]
              const diffValue = (row[1] - nasdaqData[index][1]).toFixed(4)
              const plusSignDiffPercentValue = `${plusSign(diffPercentValue)}${percentValue(diffPercentValue)}`
              const plusSignDiffValue = `${plusSign(diffValue)}${diffValue}`
              if (index < 2) {
                return (
                  <DifferentPercentValue
                    better={index === 0 ? plusSign(diffPercentValue) === '+' : plusSign(diffPercentValue) === ''}
                  >
                    {plusSignDiffPercentValue}
                  </DifferentPercentValue>
                )
              }
              return (
                <DifferentValue
                  better={plusSign(diffValue) === '+'}
                >
                  {plusSignDiffValue}
                </DifferentValue>
              )
            })()}
          </React.Fragment>
        )
      })}
    </StyledPerformanceTable>
  )
}

export default PerformanceTable