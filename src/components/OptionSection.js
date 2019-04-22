import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Form,
  Select,
  InputNumber,
  Button
} from 'antd'

import ResultCard from './ResultCard'
import requestForData from '../api/requestForData'
import skeletonData from '../helpers/skeletonData'
import tickers from '../helpers/tickers'

const Option = Select.Option

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

  @media (min-width: 570px) {
    width: 520px;
  };

  @media (min-width: 750px) {
    width: 700px;
  };
`

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

const OptionSection = () => {
  const [data, setData] = useState(skeletonData)
  const [showResult, setShowResult] = useState(false)
  const [showWrapper, setShowWrapper] = useState(true)
  const [loading, setLoading] = useState(false)

  const [formTickers, setFormTickers] = useState([])
  const [formRiskFactor, setFormRiskFactor] = useState(0.5)
  const [formRiskFreeRate, setFormRiskFreeRate] = useState(2.5)
  const [formYears, setFormYears] = useState(5)

  const renderTickerOptions = tickers => {
    return tickers.map((ticker, i) => {
      return (
        <Option key={ticker}>{ticker}</Option>
      )
    })
  }

  const handleSelect = value => {
    setFormTickers(value)
  }

  const handleFormRiskFactor = value => {
    // console.log(value)
    setFormRiskFactor(value)
  }

  const handleFormRiskFreeRate = value => {
    // console.log(value)
    setFormRiskFreeRate(value)
  }

  const handleFormYears = value => {
    // console.log(value)
    setFormYears(value)
  }

  const onSubmit = async () => {
    // console.log(formTickers)
    // console.log(formRiskFactor)
    // console.log(formRiskFreeRate / 100)
    // console.log(formYears)
    
    const options = {
      risk_factor: formRiskFactor,
      risk_free_rate: formRiskFreeRate / 100,
      years: formYears
    }
    if (formTickers.length !== 0)
      options.tickers = formTickers
    
    setLoading(true)
    const result = await requestForData(options)
    setLoading(false)
    setData(result)
    // console.log(result)
    setShowWrapper(false)
    setShowResult(true)
  }

  const onCloseResult = () => {
    setShowResult(false)
    setTimeout(() => setData(skeletonData), 400)
    setTimeout(() => setShowWrapper(true), 400)
  }

  return (
    <>
      <Wrapper show={showWrapper}>
        <Form {...formItemLayout} style={{ width: '100%' }}>
          <Form.Item label={'Tickers'}>
            <Select
              mode='multiple'
              size='default'
              placeholder='Default: All'
              onChange={handleSelect}
              // style={{ width: 500 }}
              defaultValue={[]}
            >
              {renderTickerOptions(tickers)}
            </Select>
          </Form.Item>
          <Form.Item label={`Risk Factor (0 - 1) : `}>
            <InputNumber
              defaultValue={formRiskFactor}
              value={formRiskFactor}
              onChange={handleFormRiskFactor}
              min={0}
              max={1}
              precision={3}
              step={0.1}
            />
          </Form.Item>
          <Form.Item label={`Risk Free Rate (0 - 100) : `}>
            <InputNumber
              defaultValue={formRiskFreeRate}
              value={formRiskFreeRate}
              onChange={handleFormRiskFreeRate}
              min={0}
              max={100}
              precision={2}
              step={0.1}
            />
          </Form.Item>
          <Form.Item label={`Years (1 - 9) : `}>
            <InputNumber
              defaultValue={formYears}
              value={formYears}
              onChange={handleFormYears}
              min={1}
              max={9}
              step={1}
            />
          </Form.Item>
          <Form.Item {...tailFormItemLayout} >
            <Button
              loading={loading}
              onClick={onSubmit}
            >
              GIVE ME BEST PORTFOLIO
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>
      <ResultCard
        data={data}
        show={showResult}
        close={onCloseResult}
      />
    </>
  )
}

export default OptionSection