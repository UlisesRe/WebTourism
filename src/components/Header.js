import {AppBar,Avatar,Drawer,IconButton,InputBase,ListItem,Toolbar,Typography,makeStyles,} from "@material-ui/core"
import { useEffect, useState } from "react"
import logo from "../Imagenes/MODELlogo.png"
import SearchIcon from "@material-ui/icons/Search"
import MenuIcon from "@material-ui/icons/Menu"
import {Link} from "react-router-dom"
const Header = () => {
  const [tablet, setTablet] = useState(true);
  const [draweropen, setDraweropen]=useState(false)
  const classes = useStyle();

  useEffect(() => {
    const responsiveness = () => window.innerWidth < 900 ? setTablet(true) : setTablet(false)
    responsiveness();
    window.addEventListener("resize", ()=>responsiveness())
  },[])


  const displayTablet = () => {
      const handleDrawerOpen= () => {
        setDraweropen(true)
       }
      const handleDrawerClose= () => { 
        setDraweropen(false)
       }
      const headersData = ["My account", "previous bookings", "Log out"]

      const getDrawerChoise= () => { 
        return headersData.map((data) => {
          return(
            <list>
              <ListItem>{ data}</ListItem>
            </list>
          )
        })
      }

      return(
        <Toolbar className="classes.toolbar">
              <IconButton {...{
                  edge: "start",
                  color: "#ccc",
                  "aria-label":"menu,",
                  "aria-haspopup": "true",
                  onClick: handleDrawerOpen,
              }}>
                <MenuIcon fontSize="large"/>
              </IconButton>
              <Drawer {...{
                  anchor: "left",
                  open: draweropen,
                  onClose: handleDrawerClose,
              }}>
                  <div>{ getDrawerChoise()}</div>
              </Drawer>
              <Link to="/Home">
                <img src={logo} className={classes.logo} alt="logo"/>
              </Link>
              
              <div className={classes.right}>
                <Typography>Sign in</Typography>
                <Avatar className={classes.avatar} />
              </div>
        </Toolbar>
      )
      
  };










  const displayDesktop = () => (
    <Toolbar className={classes.toolbar}>
      <Link to="/Home">
          <img src={logo} className={classes.logo} alt="logo"/>
      </Link>
      <div className={classes.center}>
        <InputBase fullWidth placeholder="Search here ..." inputProps={{ className: classes.input }}
        />
        <SearchIcon />
      </div>
      <div className={classes.right}>
        <Typography>Sign in</Typography>
        <Avatar className={classes.avatar} />
      </div>
    </Toolbar>
  );

  return( 
      <AppBar className={classes.root}>
          {
          tablet ? displayTablet() : displayDesktop()
          }
          </AppBar>
  )
}

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    zIndex: 99,
    width: "100vw",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "50px",
    margin: theme.spacing(1, 0, 0, 2),
    objectFit: "contain",
  },
  center: {
    display: "flex",
    alignItems: "center",
    border: "1px solid lightgray",
    minWidth: "300px",
    borderRadius: "999px",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  input: {
    fontSize: "1.2rem",
    padding: theme.spacing(1, 5, 1, 5),
  },
  right: {
    color: "#333",
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2),
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
}));

export default Header;
