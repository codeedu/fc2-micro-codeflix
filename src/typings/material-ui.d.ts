import { BreakpointOverrides } from "@material-ui/core/styles/createBreakpoints";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    mobile: true; // adds the `tablet` breakpoint
    md: true;
    lg: true;
    xl: true;
  }
}
