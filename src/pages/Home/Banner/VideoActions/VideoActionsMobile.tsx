import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import PlayCircleOutline from "@material-ui/icons/PlayCircleOutline";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import InfoIcon from "@material-ui/icons/Info";
import { BANNER_VIDEO_ACTIONS_MEDIA_QUERY } from "../../../../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "inherit",
  },
  navigationAction: {
    color: theme.palette.text.primary,
  },
}));

interface VideoActionsMobileProps {}
const VideoActionsMobile: React.FunctionComponent<VideoActionsMobileProps> = (
  props
) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDown700 = useMediaQuery(theme.breakpoints.down(BANNER_VIDEO_ACTIONS_MEDIA_QUERY));

  return isDown700 ? (
    <BottomNavigation className={classes.root} showLabels>
      <BottomNavigationAction
        className={classes.navigationAction}
        label="Play"
        icon={<PlayCircleOutline />}
      />
      <BottomNavigationAction
        className={classes.navigationAction}
        label="Minha lista"
        icon={<AddCircleOutline />}
      />
      <BottomNavigationAction
        className={classes.navigationAction}
        label="Info"
        icon={<InfoIcon />}
      />
    </BottomNavigation>
  ) : null;
};

export default VideoActionsMobile;
