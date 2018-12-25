import styled from 'styled-components';
import { Colors } from '../Themes';
import React from 'react';

const PrimaryText = styled.Text`
  width: 100%;
  color: ${props => (props.color ? props.color : Colors.primaryColor)};
  font-family: 'Roboto Slab';
  allowFontScaling;true;
  text-align: ${props => (props.align ? props.align : 'center')};
  font-weight: ${props => (props.bold ? 'bold;' : 'normal;')};
  font-size: ${props => (props.size ? props.size : '16px')};
`;

export default props => <PrimaryText {...props} />;
