import React from 'react'
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import { FormControl, InputLabel, Select as MuiSelect,makeStyles, MenuItem, FormHelperText } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        width:'80%',
        textAlign:"left",
        "& label":{
            fontSize:"25px",
            backgroundColor:"#fafafa"
        }
    }  
}))

export default function Select(props) {
    const classes = useStyles();
    const { name, label, value, varient, onChange, options, error = null } = props;

    return (
        <FormControl
        className={classes.root }
            variant={varient || "outlined"}
            {...(error && { error: true })}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
            fullWidth= {true}
                label={label}
                name={name}
                value={value}
                // inputRef={inputRef} 

                onChange={onChange}
                >
                {
                    options.map(
                        item => (
                           <MenuItem key={item.DepartmentID}  value={item.DepartmentID}>
                                {item.DepartmentName}
                           </MenuItem>
                        )
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}

            {/* <Autocomplete
                        id="country-select-demo"
                        options={locations}
                        onChange={(e, value) => changeLocation(value)}
                      getOptionSelected={(option, value) => option.LocationID === value.LocationID}
                      value={locationId}
                        autoHighlight
                        getOptionLabel={(option) => option.LocationName}
                        renderOption={(option) => (
                          <React.Fragment>
                            {option.LocationName} 
                          </React.Fragment>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={label}
                            variant="outlined"
                            name={name}
                          />
                        )}
                        />  */}


        </FormControl>
    )
}
