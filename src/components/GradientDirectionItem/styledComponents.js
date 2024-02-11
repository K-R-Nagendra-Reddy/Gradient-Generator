// Style your elements here
import styled from 'styled-components'

export const DirectionButton = styled.button`
  height: 30px;
  width: 60px;
  border-radius: 10px;
  color: #000000;
  opacity: ${props => (props.opacityValue ? 1 : 0.5)};
  margin: 10px;
`
export const List = styled.li`
  margin: 20px;
`
