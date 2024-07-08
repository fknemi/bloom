import React from 'react';

import {Svg, Path, Circle} from "react-native-svg"
const AddImageIcon = ({width, height}) => {
    return (
     <Svg
  width={width || 19}
  height={height || 18}
  viewBox="0 0 19 18"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <Path
    d="M1.9211 1.89474H14.2369V8.52632H16.1316V1.89474C16.1316 0.849789 15.2818 0 14.2369 0H1.9211C0.876157 0 0.0263672 0.849789 0.0263672 1.89474V13.2632C0.0263672 14.3081 0.876157 15.1579 1.9211 15.1579H9.50005V13.2632H1.9211V1.89474Z"
    fill="#1C2309"
  />
  <Path
    d="M5.71064 7.57894L2.86853 11.3684H13.2896L9.50011 5.6842L6.658 9.47368L5.71064 7.57894Z"
    fill="#1C2309"
  />
  <Path
    d="M16.1316 10.4211H14.2369V13.2632H11.3948V15.1579H14.2369V18H16.1316V15.1579H18.9737V13.2632H16.1316V10.4211Z"
    fill="#1C2309"
  />
</Svg>
 
    );
}

export default AddImageIcon;


