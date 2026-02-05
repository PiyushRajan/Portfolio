"use client"

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath }:{animationPath:any}) => (
  <Lottie
    animationData={animationPath}
    loop
    autoplay
    style={{ width: '95%' }}
  />
);

export default AnimationLottie;