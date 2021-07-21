import React from "react";
import { Slide, SlideProps } from "@material-ui/core";

const TransitionSlide = React.forwardRef<any, SlideProps>((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export default TransitionSlide;
