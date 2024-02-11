import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'
import {
  Container,
  Heading,
  ChoosePick,
  ButtonContainer,
  TypeContainer,
  PickedColor,
  TypeInput,
  Generate,
  ColorContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    activeValue: gradientDirectionsList[0].value,
    linearGradient: `(to ${gradientDirectionsList[0].value}, #8ae323,#014f7b)`,
  }

  onChangeFirstColor = event => {
    console.log(event.target.value)
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onChangeDirection = given => {
    this.setState({activeValue: given})
  }

  onClickGenerate = () => {
    const {firstColor, secondColor, activeValue} = this.state
    this.setState({
      linearGradient: `(to ${activeValue},${firstColor},${secondColor})`,
    })
  }

  render() {
    const {firstColor, secondColor, activeValue, linearGradient} = this.state

    return (
      <Container data-testid="gradientGenerator" gradient={linearGradient}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <ChoosePick>Choose Direction</ChoosePick>
        <ButtonContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              details={each}
              changeDirection={this.onChangeDirection}
              isActive={activeValue === each.value}
            />
          ))}
        </ButtonContainer>
        <ChoosePick>Pick the Colors</ChoosePick>
        <ColorContainer>
          <TypeContainer>
            <PickedColor>{firstColor}</PickedColor>
            <TypeInput
              type="color"
              onChange={this.onChangeFirstColor}
              value={firstColor}
            />
          </TypeContainer>
          <TypeContainer>
            <PickedColor>{secondColor}</PickedColor>
            <TypeInput
              type="color"
              onChange={this.onChangeSecondColor}
              value={secondColor}
            />
          </TypeContainer>
        </ColorContainer>
        <Generate type="button" onClick={this.onClickGenerate}>
          Generate
        </Generate>
      </Container>
    )
  }
}

export default GradientGenerator
