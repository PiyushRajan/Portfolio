"use client"

import Lottie from "lottie-react";


type Props = {
  animationPath: Record<string, unknown>;
};


const AnimationLottie = ({ animationPath }: Props) => (
  <Lottie
    animationData={animationPath}
    loop
    autoplay
    style={{ width: '95%' }}
  />
);

export default AnimationLottie;