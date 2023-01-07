import { Menu, MenuItem } from "@mui/material";

interface RenderMenuProps {
  anchorEl: null | HTMLElement;
  menuId: string;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
}

export const RenderMenu = (props: RenderMenuProps) => {
  const { anchorEl, menuId, isMenuOpen, handleMenuClose } = props;
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={() => handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};
