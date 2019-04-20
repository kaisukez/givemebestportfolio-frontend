import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledMainButton = styled.button`
  text-transform: uppercase;
  border-radius: 500px;
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding: 1.75rem 2.5rem 1.75rem 2.5rem;
  cursor: pointer;
`

const StyledOptions = styled.div`
  font-size: 1.25rem;
  margin-top: 0.75rem;
`

const MainSection = () => {
  return (
    <Wrapper>
      <StyledMainButton>Give Me<br />Best Portfolio</StyledMainButton>
      <StyledOptions>with options</StyledOptions>
    </Wrapper>
  )
}

export default MainSection