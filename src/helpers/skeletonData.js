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
  },
  options: {
    tickers: 'All',
    risk_factor: 0.5,
    risk_free_rate: 0.025,
    years: 5
  }
}

export default skeletonData