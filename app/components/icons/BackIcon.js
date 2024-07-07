import React from 'react';

import {Svg, Path, Circle} from "react-native-svg"
const BackIcon = ({width, height}) => {
    return (
 <Svg
  width={width || 30}
  height={height || 30}
  viewBox="0 0 30 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM15.9978 9.06083C16.5836 8.47496 17.5334 8.47493 18.1192 9.06075C18.7051 9.64659 18.705 10.5964 18.1191 11.1822L15.6557 13.6451C14.8745 14.4262 14.8745 15.6927 15.6557 16.4738L18.1191 18.9367C18.705 19.5225 18.7051 20.4723 18.1192 21.0582C17.5334 21.644 16.5836 21.644 15.9978 21.0581L11.4139 16.4736C10.633 15.6925 10.633 14.4264 11.4139 13.6453L15.9978 9.06083Z"
    fill="#1C2309"
  />
</Svg>
     
      
    );
}

export default BackIcon;


