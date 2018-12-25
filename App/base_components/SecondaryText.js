import styled from 'styled-components';
import { Colors } from '../Themes';

const SecondaryText = styled.Text`
  color: ${Colors.secondaryColor};
  font-family: 'Roboto Slab';
  width: 100%;
  text-align: ${props => (props.align ? props.align : 'left')};
  font-size: ${props => (props.size ? props.size : '16px')};
`;

export default SecondaryText;
