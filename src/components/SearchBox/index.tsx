import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchIconWrapper, StyledInputBase, Search } from "./styles";
import { useState } from "react";

export const SearchBox = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        "& > :not(style)": {
          m: 1,
          width: "100%",
        },
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Pesquisar"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearchInputValue(e.target.value)}
        />
      </Search>
    </Box>
  );
};
