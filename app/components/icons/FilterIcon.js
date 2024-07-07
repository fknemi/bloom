import React from 'react';
import Svg, { Path } from 'react-native-svg';

const FilterIcon = ({width, height}) => {

    return (
        <Svg
        width={width || 22}
        height={height || 14}
        viewBox="0 0 22 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M4.33334 5.66668H17.6667V8.33334H4.33334V5.66668ZM0.333344 0.333344H21.6667V3.00001H0.333344V0.333344ZM8.33334 11H13.6667V13.6667H8.33334V11Z"
          fill="#9C9388"
        />
      </Svg>
      
      
    );
}

export default FilterIcon;


