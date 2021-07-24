import React from 'react'
import { Grid , makeStyles , Typography} from '@material-ui/core';
// import car from "../../assets/images/car.jpg"
// import VoiceChatOutlinedIcon from '@material-ui/icons/VoiceChatOutlined';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
 
const useStyles = makeStyles((theme) => ({
    root: {
      borderBottom:"1px solid #ccc",
      marginBottom:"20px",
      height: '100%',
      backgroundColor:"#fff",
      boxShadow: '4px 1px 10px 2px #ccc',
      padding:"5px",
      borderRadius:"5px",
      "& .imgContainer":{
          position:'relative',
          "& p":{
              position:"absolute",
              backgroundColor:"rgba(0, 0, 0 ,.7)",
              textAlign: 'center',
              width: '100%',
              top:"0",
              color:"#fff",
              padding:"2px 10px",
              fontSize:"40px",
          }
      }
    },
    flexion:{
        display:"flex",
        alignItems:"center",
        padding: '4px 10px',
        "& svg":{
            margin:"0 4px"
        },
    },

}));
function ImgCard(props) {
    const  {CarImage,FaceImagePath,LPRDate,LPRID,LPRTime,LicenseImage , LicenseNumber,
            getOneCustomer,img, CameraName , key ,length,
            // DName, DName_1, DName_M,DName_T,DName_T_1 ,
            // ECode,ECode_1,ECode_M,ECode_M_1,ECode_T,ECode_T_1,
            // EName,EName_1,EName_M,EName_M_1,EName_T,EName_T_1,
            // OutName,InName
    } = props

   const classes = useStyles();

    return (
        <Grid key={key} item xs={length == 1 ? (12):(12) } sm={length == 1 ? (12):(3) } 
         md={length == 1 ? (12):(3) }  lg={length == 1 ? (12):(3) } 
         onClick={() => getOneCustomer(img)} 

         >   
            <div className={classes.root}>
                <Typography
                align ="center"
                variant="h3"
                color="primary"
                >
                <span className='blink_me'> . </span> {CameraName}   
                </Typography>
        {LPRID !== 0 ? (
            <>
                <div className='d-flex justify-content-between'> 
                    <Typography className='{classes.flexion}'  align ="center" variant="h6">
                        {LPRTime} <AccessAlarmsIcon color="primary"/>
                    </Typography>
                    <Typography className={classes.flexion}  align ="center" variant="h6" >
                    {/* {LPRDate} */}
                    {LPRDate?((LPRDate).slice(0, 10)):("")}<EventNoteIcon color="primary"/>
                    </Typography>               
                </div>
         <div className="d-flex align-items-center imgContainer">
         <div className="">
                    <img loading="lazy"  style={{maxHeight: length == 1 ?('45vh') :("700px"), width:"100%" , objectFit: 'contain'}} src={CarImage} />
                  
                </div>
                <img loading="lazy" style={{maxHeight: length == 1 ?('45vh') :("700px"),  objectFit: 'contain', width:"100%"}} src={FaceImagePath} />
                {/* <img loading="lazy" style={{maxHeight: length == 1 ?('30vh') :("300px"),  objectFit: 'contain', width:"50%"}} src={FaceImage} /> */}
                <p>123 ط ل و{LicenseNumber}</p>

         </div>
                <div className='d-flex align-items-center'> 
            
                </div>
                </> ) : (
                    <Typography
                    style={{marginTop:"40%" , backgroundColor:"#ccc"}}
                align ="center"
                variant="h4"
                                >
               لا يوجد زائرين 
                </Typography>
                 
                )}

            </div>
       
     </Grid>
    )
}

export default ImgCard
