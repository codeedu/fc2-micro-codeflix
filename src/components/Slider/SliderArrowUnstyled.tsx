import { IconButton, IconButtonProps } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

interface SliderArrowUnstyledProps {
  dir: "left" | "right";
  IconButtonProps?: IconButtonProps;
  classes?: {
    arrow?: string;
  };
}
const SliderArrowUnstyled: React.FunctionComponent<SliderArrowUnstyledProps> = (
  props
) => {
  const { dir, IconButtonProps = {}, classes = {} } = props;
  return (
    <IconButton size="small" {...IconButtonProps}>
      {dir === "left" ? (
        <KeyboardArrowLeft className={classes.arrow} />
      ) : (
        <KeyboardArrowRight className={classes.arrow} />
      )}
    </IconButton>
  );
};

export default SliderArrowUnstyled;
