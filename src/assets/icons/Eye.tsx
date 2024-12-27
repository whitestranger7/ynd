import Svg, { SvgProps, G, Path } from "react-native-svg"
import { memo } from "react";
import { colors } from "../colors";

export const Eye = memo((props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill={colors.white}
    {...props}
  >
    <G
      fill={colors.white}
      stroke={colors.white}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M649 137.999h26v18h-14M653 155.999h-4v-14M661 156l-8 6v-6"/>
    </G>
    <Path
      d="M16 25c-4.265 0-8.301-1.807-11.367-5.088a1 1 0 0 1 1.462-1.365C8.778 21.419 12.295 23 16 23c4.763 0 9.149-2.605 11.84-7-2.69-4.395-7.077-7-11.84-7-4.938 0-9.472 2.801-12.13 7.493a1 1 0 1 1-1.74-.986C5.147 10.18 10.333 7 16 7c5.668 0 10.853 3.18 13.87 8.507a1 1 0 0 1 0 .985C26.853 21.819 21.668 25 16 25z"/>
    <Path
      d="M16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/>
  </Svg>
));
