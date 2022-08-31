import { Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@material-ui/core";
import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, ReactNode, useState } from "react";

import { Container } from "./styles";

export const ExamplePage = () => {


   
  return (
    
      <Container>
        <form>

          
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>

          <Checkbox defaultChecked />
          <Checkbox />


          <Button 
            variant="contained" 
            color="primary" 
            onClick={
              () => {alert("Você clickou no Botão")}
            }
          >
            Contained
          </Button>
        </form>

        

       
      </Container>
    
    );
};
