import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import images from '../../../util/images'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <image width={90} height={90} href={images.egg9.src} />
    </Svg>
  );
};

export default Icon;
