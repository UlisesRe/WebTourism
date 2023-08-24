import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { Button, InputBase, Typography, makeStyles } from '@material-ui/core';
import { People } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const selectionRange = {
    startDate: new Date(2023,8,23),
    endDate: new Date(2023,8,23),
    key: "selection",
}


const DatePicker = () => {
    const classes = useStyle()

    const handleSelect = () => { }
    return (
        <div className={classes.root}>
            <DateRangePicker ranges={[selectionRange] } 
                onChange={handleSelect }
            />
            <div className={classes.inputSection}>
                <Typography variant="h5">Number of guets</Typography>
                <div className={classes.people}>
                    <InputBase placeholder="Num"
                    inputProps={{className: classes.input}}
                    />
                    <People/>
                </div>
                <Link to="/search">
                    <Button>Search Dates</Button>
                </Link>
                
            </div>
        </div>
    )
}






const useStyle = makeStyles((theme) => ({
    root: {
        position: "absolute",
        top: "13vh",
        left: "30vw",
        [theme.breakpoints.down("sm")]:{
            top: "20vh",
            left: 0,
        }
    },
    inputSection: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        textAlign: "center",
        "& button:hover" : {
            backgroundColor: "rgba(255,103,31,0.4)",
            color: "#fff"
        },
    },
    people : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    input:{
        width: "4vw",
        border: "1px solid #ccc",
        margin: theme.spacing(1,2,0,0),
        padding: theme.spacing(0.5,0,0.5,1)
    },
}))
  
export default DatePicker