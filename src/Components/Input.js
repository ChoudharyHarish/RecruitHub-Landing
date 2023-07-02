import React from "react";
import TextField from "@mui/material/TextField";

const InputCustom = ({ labelName, icon }) => {
  return (
    <div className="p-4 flex items-center text-white w-full">
      {icon}
      <TextField
        label={labelName}
        variant="standard"
        color="primary"
        InputLabelProps={{ sx: { color: '#71C9CE' } }}
        InputProps={{sx:{color:'white'}}}
        fullWidth
      />
    </div>
  );
};

export default InputCustom;
