import { memo } from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { colors } from "../colors";

export const Star = memo((props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill={colors.white}
    stroke={colors.white}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-star"
    {...props}
  >
    <Path
      d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </Svg>
));
