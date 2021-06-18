import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';

const employees = [
    {  title: 'Debdeep Dutta' } ,
    {  title: 'Ankur Kalita' }
] 

const LeaveTracker = () => {
    const [value, setValue] = React.useState(null);
    const [employeeLeave,setEmployeeforLeave] = React.useState(null);
    const employee_selected = () => {
        setEmployeeforLeave(true)
    }

    return(
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            //setEmployeeforLeave(true);
                        }}
                        id="combo-box-demo"
                        options={employees}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => <TextField {...params} label="Select employee for leave" variant="outlined" />}
                    />
                </Grid>
                <Grid item xs={12} sm>
            </Grid>
        </Grid>
        {employeeLeave ? <h1>{value}</h1> : null}
      </>
    )
}

export default LeaveTracker