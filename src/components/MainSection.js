import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import ResultCard from './ResultCard'
import requestForData from '../api/requestForData'
import simpleFetch from '../api/simpleFetch'

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

const skeletonData = {
  nasdaq_index: {
    return: 0,
    std: 0,
    sharpe: 0
  },
  portfolio: {
    return: 0,
    std: 0,
    sharpe: 0,
    what_to_buy: [
      ['000', 0],
      ['000', 0],
      ['000', 0]
    ]
  }
}

const MainSection = () => {
  const [data, setData] = useState(skeletonData)
  useEffect(() => {
    (async () => {
      const result = await requestForData({})
      setData(result)
    })()
  }, [])
  return (
    <>
      <Wrapper>
        <StyledMainButton>Give Me<br />Best Portfolio</StyledMainButton>
        <StyledOptions>with options</StyledOptions>
      </Wrapper>
      <ResultCard data={data} />
    </>
  )
}

export default MainSection