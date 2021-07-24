import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography, IconButton, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
// import { Spinner } from "../controls";
import EventNoteIcon from '@material-ui/icons/EventNote';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(2),
        width:"100%",
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
    dialogTitle: {
        paddingRight: '0px'
    }
}))

export default function Popup(props) {

    const { content, openPopup ,setOpenPopup  } = props;
    const classes = useStyles();

    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex', alignItems:"center"}}>
                    <Typography variant="h4" color="primary" component="div" style={{ flexGrow: 1 }}>
                        {content.CameraName}
                    </Typography>
                    <IconButton
                        onClick={() => { setOpenPopup(false) }}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>


            <div>
        {content.LPRID !== 0 ? (
            <>
                <div className='d-flex justify-content-between'> 
                    <Typography className='{classes.flexion}'  align ="center" variant="h6">
                        {content.LPRTime} <AccessAlarmsIcon color="primary"/>
                    </Typography>
                    <Typography align ="center" variant="h6" >
                    {/* {LPRDate} */}
                    {content.LPRDate?((content.LPRDate).slice(0, 10)):("")}<EventNoteIcon color="primary"/>
                    </Typography>               
                </div>
                <div className="d-flex align-items-center imgContainer">
         <div className="">
                    <img loading="lazy"  style={{maxHeight:"700px", width:"100%" , objectFit: 'contain'}} src={content.CarImage} />
                  
                </div>
                <img loading="lazy" style={{maxHeight:"700px",  objectFit: 'contain', width:"50%"}} src={content.FaceImagePath} />
                {/* <img loading="lazy" style={{maxHeight: length == 1 ?('30vh') :("300px"),  objectFit: 'contain', width:"50%"}} src={FaceImage} /> */}
                <p>{content.LicenseNumber}</p>

         </div>
                <div className='d-flex align-items-center'> 
                    {/* <img loading="lazy" style={{maxHeight:'400px' ,objectFit: 'contain',  width:"50%"}} src={content.LicenseImage} />
                    <img loading="lazy" style={{height:'400px' , objectFit: 'contain', width:"50%"}} src={content.FaceImage} /> */}

                    {/* <div style={{marginRight:"10px"}}>
                    <Typography align="left" variant="h6">
                      الاسم :   
                      {content.EName!== null ? (content.EName) : ("")}
                      {content.EName_1!== null ? (content.EName_1) : ("")}
                      {content.EName_M!== null ? (content.EName_M) : ("")}
                      {content.EName_M_1!== null ? (content.EName_M_1) : ("")}
                      {content.EName_T!== null ? (content.EName_T) : ("")}
                      {content.EName_T_1!== null ? (content.EName_T_1) : ("")}
                       
                    </Typography>
                    <Typography variant="h6">
                       الكود :
                      {content.ECode!== null ? (content.ECode) : ("")}
                      {content.ECode_1!== null ? (content.ECode_1) : ("")}
                      {content.ECode_M!== null ? (content.ECode_M) : ("")}
                      {content.ECode_T!== null ? (content.ECode_T) : ("")}
                      {content.ECode_T_1!== null ? (content.ECode_T_1) : ("")}
                      {content.ECode_M_1!== null ? (content.ECode_M_1) : ("")}
                     
                    </Typography>
                    <Typography variant="h6">
                       الإداره :
                      {content.DName!== null ? (content.DName) : ("")}
                      {content.DName_1!== null ? (content.DName_1) : ("")}
                      {content.DName_M!== null ? (content.DName_M) : ("")}
                      {content.DName_T!== null ? (content.DName_T) : ("")}
                      {content.DName_T_1!== null ? (content.DName_T_1) : ("")}
                    </Typography>
                    <Typography variant="h6">
                      {content.InName!== null ? (content.InName) : ("")}
                      {content.OutName!== null ? (content.OutName) : ("")}
                    </Typography>
                    </div>
              */}
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
           
            </DialogContent>

       
        </Dialog>
    )
}