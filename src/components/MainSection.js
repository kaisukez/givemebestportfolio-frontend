import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import {
  Button
} from 'antd'

import ResultCard from './ResultCard'
import requestForData from '../api/requestForData'
import skeletonData from '../helpers/skeletonData'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${props => props.show ? 'flex' : 'none'};
`

// const StyledMainButton = styled.button`
//   text-transform: uppercase;
//   border-radius: 500px;
//   border: none;
//   outline: none;
//   font-size: 1.5rem;
//   padding: 1.75rem 2.5rem 1.75rem 2.5rem;
//   cursor: pointer;
// `

const StyledMainButton = styled(Button)`
  text-transform: uppercase;
  border-radius: 500px;
  border: none;
  outline: none;
  font-size: 1.5rem;
  padding: 1.75rem 2.5rem 1.75rem 2.5rem;
  cursor: pointer;
  background-color:#457dff;
  color: white;
  line-height: inherit;
  height: inherit;

  transition: background-color 0.1s ease-out;

  &:hover {
    background-color: #2567ff;
    color: white;
  }
`

const StyledOptions = styled.div`
  font-size: 1.4rem;
  margin-top: 1.25rem;
  cursor: pointer;
`

const MainSection = props => {
  const [data, setData] = useState(skeletonData)
  const [showResult, setShowResult] = useState(false)
  const [showWrapper, setShowWrapper] = useState(true)
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   (async () => {
  //     const result = await requestForData({})
  //     setData(result)
  //   })()
  // }, [])

  const onSubmit = async () => {
    setLoading(true)
    const result = await requestForData()
    setLoading(false)
    setData(result)
    // console.log(result)
    setShowWrapper(false)
    setShowResult(true)
  }

  const onCloseResult = () => {
    setShowResult(false)
    setTimeout(() => setData(skeletonData), 500)
    setTimeout(() => setShowWrapper(true), 500)
  }

  const handleWithOptions = () => {
    props.history.push('/options')
  }

  return (
    <>
      <Wrapper show={showWrapper}>
        <StyledMainButton
          onClick={onSubmit}
          loading={loading}
        >
          Give Me<br />Best Portfolio
        </StyledMainButton>
        <StyledOptions onClick={handleWithOptions}>with options</StyledOptions>
      </Wrapper>
      <ResultCard
        data={data}
        show={showResult}
        close={onCloseResult}
      />
    </>
  )
}

export default MainSection