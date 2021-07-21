import { useMediaQuery, useTheme } from "@material-ui/core";

const useIsSmallWindow = () => {
  const theme = useTheme();
  const mobileWidth = theme.breakpoints.values.mobile;
  return useMediaQuery(theme.breakpoints.down(mobileWidth));
};

export default useIsSmallWindow;
