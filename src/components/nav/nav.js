import React, {useState } from "react"
import logo from '../../assets/images/watnya.png';
// import logo from '../../assets/images/logo.jpg';
import { Link, useHistory } from "react-router-dom"
import { Menu ,AppBar, Toolbar, Button, Typography, makeStyles ,Paper} from '@material-ui/core'
import Setting from "./setting"
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
const useStyles = makeStyles((theme) => ({
root: {
  flexGrow: 1,
  // padding:"5px 0",
  marginBottom:"85px",
  "& .settingIcon":{
    display:"flex",
    alignItems:"center",
    cursor:"pointer",
    marginLeft:"20px",
    transition:"1s",
    fontSize:"24px",
    fontFamily: 'Markazi',
    lineHeight:' 1.167',
    '& svg':{
      marginRight:"6px",
      color:"#115d8e",
    },
  },
  "& .settingIcon:hover , .reportsLink:hover":{
    color:"#115d8e",
   },
  '& .MuiAppBar-colorPrimary':{
    backgroundColor:'#fff',
    color:"#000",
  },
  "& .reportsLink":{
    color:"#000",
    textDecoration:"none",
    transition:"1s",
    fontSize:"24px",
    fontFamily: 'Markazi',
    marginLeft:"20px",
    lineHeight:' 1.167',
    '& svg':{
      marginRight:"6px",
      color:"#115d8e",

    },
  }
 
},
rightNav:{
  backgroundColor:"#fff",
  height:"100vh",
  width:"300px",
  position: 'fixed',
  bottom: '0',
  zIndex: '99',
  left: '-350px',
  transition:"1s",
 },
 rightNavLeft:{
  backgroundColor:"#ffff",
  height:"100vh",
  width:"400px",
  position: 'fixed',
  bottom: '0',
  zIndex: '999',
  left: '0',
  transition:"1s",
  boxShadow:"3px 7px 5px 2px #eee",
  "& .close":{
    fontSize: '30px',
    borderBottom: '1px solid #eee',
    textAlign: 'right',
    padding: '5px 10px',
    color: '#cc1818',
    fontWeight: 'bold',
    '& .close-span':{
      cursor:"pointer",
    }
  }

 }

}));

export default  function Nav({removeNav}) {
  const history = useHistory()
const [activeSlider , setActiveSlider] = useState(true)
  function handleLogout() {
    localStorage.setItem('isLogin', false);
    localStorage.setItem('AccessToken', '');

    history.push(`/Login`)

  }
  const classes = useStyles();
 


    return (
      <>

      <Paper elevation={0} square className={classes.root}>

      <AppBar style={{zIndex:"9"}} position="fixed">
        <Toolbar class="nav-container d-flex justify-content-between align-items-center">
   
           {/* <div className='logoutDiv'>  <span onClick={handleLogout}> تسجيل الخروج </span>  <p>{FirsName}</p> </div> */}

           <div className="d-flex  align-items-center">
           {removeNav ? (  
             <p className="settingIcon" onClick={()=>setActiveSlider(!activeSlider)}>
             <SettingsIcon/> الاعدادات 
             </p>
         
          ) :("")}
          <Link className="d-flex  align-items-center reportsLink" to="/chart">  <AssessmentIcon/> التقارير </Link>
          </div>
          <Link to="/">
          <img 
          style={{margin:'0 15px',
          objectFit: 'contain',
          height:'95px',
          }}
          className="img-fluid" src={logo}/>
         </Link>
        </Toolbar>
      </AppBar>
    </Paper>      
    {removeNav ? (
      <div className={activeSlider ? (classes.rightNav):(classes.rightNavLeft) }>
            <div className="close">
              <span 
                onClick={()=>setActiveSlider(!activeSlider)}
                className="close-span">x 
                </span>
            </div>
            <div style={{position:"relative"}}> 

              <Setting
                setActiveSlider={setActiveSlider}
                activeSlider={activeSlider}
              />            
            </div>

      </div>
  ) :("")}

      </>      
        
    )
}