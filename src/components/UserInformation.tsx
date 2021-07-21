import { Avatar, useTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const UserInformation = () => {
  const theme = useTheme();
  return (
    <>
      <Avatar src="" style={{ marginRight: theme.spacing(1) }}>
        NU
      </Avatar>
      <Typography noWrap={true}>
        Nome do usuario
      </Typography>
    </>
  );
};

export default UserInformation;
