import { Button, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const Banner = () => {
  const classes = useStyle()
  return (
      <div className={classes.root}>
          <Typography variant="h2">Plan you getaway .....</Typography>
          <Button variant="contained">Check our places</Button>
      </div>
  )
}

const useStyle = makeStyles((theme) => ({
    root:{
        height: "50vh",
        position: "relative",
        
    }
}))

export default Banner