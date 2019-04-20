import React from 'react'
import styled from 'styled-components'

const StyledTwoColumnData = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledRow = styled.div`
  display: flex;
`

const TwoColumnData = props => {
  const { data } = props
  return (
    <StyledTwoColumnData>
      {data.map(row => {
        return(
          <StyledRow>{row}</StyledRow>
        )
      })}
    </StyledTwoColumnData>
  )
}

export default TwoColumnData