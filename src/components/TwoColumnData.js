import React from 'react'
import styled from 'styled-components'

const StyledTwoColumnData = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`

const Value = styled.div`
  padding: 1em;
`

const TwoColumnData = props => {
  const { data } = props
  return (
    <StyledTwoColumnData>
      {data.map(row => {
        return(
          <>
            <Value>{row[0]}</Value>
            <Value>{row[1]}</Value>
          </>
        )
      })}
    </StyledTwoColumnData>
  )
}

export default TwoColumnData