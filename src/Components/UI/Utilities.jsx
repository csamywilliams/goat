import React from 'react';
import { WaveSvg } from '../UI/Components.styles';
import theme from '../../theme';

export const WaveSVG = (color) => {

    const fill = color.fill || theme.main.wave.default;
  
    return <WaveSvg id="wave"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 30">
      <path d="M -1 21 Q 345 -1 696 14 Q 1047 30 1397 5 L 1393 30 L -1 30 Z" fill={fill}></path>
    </WaveSvg>;
}