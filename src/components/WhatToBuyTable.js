import React from 'react'
import styled from 'styled-components'

import {
  Value,
  PercentValue
} from './Value'
import percentValue from '../helpers/percentValue'

const StyledWhatToBuyTable = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`

const WhatToBuyTable = props => {
  const { data } = props
  return (
    <StyledWhatToBuyTable>
      {data.map((row, index) => {
        return(
          <React.Fragment key={`whatToBuy-${index}`}>
            <Value>{row[0]}</Value>
            <PercentValue>{percentValue(row[1])}</PercentValue>
          </React.Fragment>
        )
      })}
    </StyledWhatToBuyTable>
  )
}

export default WhatToBuyTable