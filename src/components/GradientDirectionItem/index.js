// Write your code here
import {DirectionButton, List} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, changeDirection, isActive} = props
  const {value, displayText} = details
  const onClickDirection = () => {
    changeDirection(value)
  }

  return (
    <List>
      <DirectionButton
        type="button"
        onClick={onClickDirection}
        opacityValue={isActive}
      >
        {displayText}
      </DirectionButton>
    </List>
  )
}

export default GradientDirectionItem
