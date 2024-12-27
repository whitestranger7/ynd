import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"

export const ArrowUp = memo((props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    className="w-6 h-6 text-gray-800 dark:text-white"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5 15 7-7 7 7"
    />
  </Svg>
));
