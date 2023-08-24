import { CssBaseline, makeStyles } from '@material-ui/core';
import React from 'react'
import Banner from './Banner';
import RoomCard from './RoomCard';
import DatePicker from './DatePicker';

const Home = () => {
  
  const classes = useStyle()
  return (
      <>
      <CssBaseline/>
      <div className={classes.root}>
          <div className={classes.dates}>
              <DatePicker/>
          </div>
          <Banner/>
          <div className={classes.section}>
              <RoomCard/>
              <RoomCard/>
              <RoomCard/>
              <RoomCard/>
          </div>
      </div>
      </>
  )
}





const useStyle = makeStyles((theme) => ({
  root: {

  },
  
}));
export default Home