import React from 'react'
import styled from 'styled-components'

import ResultCard from './ResultCard'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
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
  font-size: 1.4rem;
  margin-top: 1.25rem;
  cursor: pointer;
`

const MainSection = () => {
  return (
    <>
      <Wrapper>
        <StyledMainButton>Give Me<br />Best Portfolio</StyledMainButton>
        <StyledOptions>with options</StyledOptions>
      </Wrapper>
      <ResultCard />
    </>
  )
}

export default MainSection