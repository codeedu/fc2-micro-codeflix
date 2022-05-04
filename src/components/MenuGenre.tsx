import { Box, Menu, MenuItem, MuiThemeProvider } from "@material-ui/core";
import ArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { FunctionComponent, useCallback, useState } from "react";
import useMenu from "../hooks/useMenu";
import { menuTheme } from "../theme";

interface MenuGenreProps {
  genreIdInit?: string;
  onGenreSelected: (genreId: string) => void;
}

const genres = [{ id: "2", name: "Ação" }];

const MenuGenre: FunctionComponent<MenuGenreProps> = (props) => {
  const { genreIdInit = "0", onGenreSelected } = props;
  const { open, anchorEl, handleOpen, handleClose } = useMenu();
  const [genreIdSelected, setGenreIdSelected] = useState(genreIdInit);

  const onClick = useCallback(
    (event) => {
      handleClose();
      const genreId = event.target.getAttribute("data-id");
      setGenreIdSelected(genreId);
      onGenreSelected(genreId);
    },
    [handleClose, onGenreSelected]
  );

  return (
    <MuiThemeProvider theme={menuTheme}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="row"
        style={{ cursor: "pointer" }}
        px={1}
        onClick={handleOpen}
      >
        {genreIdSelected === "0" && "Todos Gêneros"}
        {genres.find((g) => g.id === genreIdSelected)?.name}
        <ArrowDown />
      </Box>

      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        getContentAnchorEl={null}
      >
        <MenuItem
          onClick={onClick}
          data-id="0"
          selected={genreIdSelected === "0"}
        >
          Todos os gêneros
        </MenuItem>
        {genres.map((genre, key) => (
          <MenuItem
            key={key}
            onClick={onClick}
            data-id={genre.id}
            selected={genreIdSelected === genre.id}
          >
            {genre.name}
          </MenuItem>
        ))}
      </Menu>
    </MuiThemeProvider>
  );
};

export default MenuGenre;
