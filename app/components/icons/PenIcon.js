import React from 'react';
import Svg, { Path } from 'react-native-svg';

const PenIcon = ({width,height, focused}) => {
    return (
        <Svg
        width={width || 23}
        height={width || 23}
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M7.15817 20.9915L18 10.1497L12.8503 5L2.0085 15.8418C1.85924 15.9913 1.75321 16.1783 1.70167 16.3832L0.5 22.5L6.61567 21.2983C6.821 21.247 7.00883 21.1408 7.15817 20.9915ZM21.5 6.64967C21.9374 6.2121 22.1832 5.61872 22.1832 5C22.1832 4.38129 21.9374 3.7879 21.5 3.35034L19.6497 1.5C19.2121 1.06257 18.6187 0.816833 18 0.816833C17.3813 0.816833 16.7879 1.06257 16.3503 1.5L14.5 3.35034L19.6497 8.5L21.5 6.64967Z"
          fill={focused ? "#000" : "#9C9388"}
          />
      </Svg>
      
    );
}

export default PenIcon;
