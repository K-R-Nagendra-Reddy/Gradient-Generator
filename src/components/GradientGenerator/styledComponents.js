// Style your elements here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradient});
`
export const ChoosePick = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
`

export const ButtonContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`

export const PickedColor = styled.p`
  color: ${props => props.choose};
  font-family: 'Roboto';
  font-size: 15px;
`
export const TypeInput = styled.input`
  height: 20px;
  width: 45px;
  margin-top: 20px;
`
export const Generate = styled.button`
  height: 30px;
  width: 90px;
  color: #000000;
  border-radius: 10px;
  background-color: #00c9b7;
  margin: 20px;
`
export const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
