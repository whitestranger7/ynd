import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react";
import { colors } from "../colors";

export const Issue = memo((props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill={colors.white}
    {...props}
  >
    <Path
      fill={colors.white}
      d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2Zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333 0 4.595 3.738 8.333 8.333 8.333 4.595 0 8.333-3.738 8.333-8.333 0-4.595-3.738-8.333-8.333-8.333Zm-.001 10.835a.999.999 0 1 1 0 1.998.999.999 0 0 1 0-1.998ZM11.994 7a.75.75 0 0 1 .744.648l.007.101.004 4.502a.75.75 0 0 1-1.493.103l-.007-.102-.004-4.501a.75.75 0 0 1 .75-.751Z"
    />
  </Svg>
));
