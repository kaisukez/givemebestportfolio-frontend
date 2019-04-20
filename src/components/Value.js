import styled from 'styled-components'

export const Value = styled.div`
  padding: 1em;
`

export const PercentValue = styled(Value)`
  &::after {
    content: ' %';
  }
`

export const DifferentValue = styled(Value)`
  color: ${props => props.better ? 'green' : 'red'};
`

export const DifferentPercentValue = styled(DifferentValue)`
  &::after {
    content: ' %';
  }
`