import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const languages = [
  {
    value: "ENG",
    label: "ENG",
  },
  {
    value: "RU",
    label: "RU",
  },
];

export default function SelectTextFields() {
  const [language, setLanguage] = React.useState("ENG");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box
      component="form"
      //   sx={{
      //     "& .MuiTextField-root": { m: 0.5, width: "100px" },
      //   }}
      sx={{ width: "100px" }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select language"
          value={language}
          onChange={handleChange}
        >
          {languages.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
