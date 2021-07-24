import React , {useState , useEffect ,useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Nav from"../../components/nav/nav"
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import { Grid , Typography} from '@material-ui/core';
import ImgCard from "./ImgCard"
import {LocationContext} from '../../contexts/LocationContext'
import Popup from "../../shared/Popup"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  function Home() {
    const { locationId  , gateId ,cameraId ,} = useContext(LocationContext)
    const classes = useStyles();
    const [imagesList  , setImagesList]  = useState([])
    const [loading, setLoading] = useState(false);
    const [removeNav, setRemoveNav] = useState(true);
    const [intervalNum, setIntervalNum] = useState('');
    const rand = () => Math.round(Math.random() * 20 );
    const [openPopup, setOpenPopup] =useState(false)
    const [content, setContent] =useState('')
 

////////////////////////////////////////////////////////     images    ////////////////////////////////////////////////
// drag and drp function
function handleOnDragEnd(result) {
console.log(result.destination)

  if (!result.destination) return;
  const items = Array.from(imagesList);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem);

  setImagesList(items);
}
useEffect(() => {
  //  if(locationId !== null && gateId!==null &&cameraId!=null){
  createAPIEndpoint(ENDPIONTS.CAMERAIMAGES).fetchBylocationAndCamera(locationId.LocationID , gateId.DoorID ,cameraId.CameraID)
      .then(res => {
        console.log(locationId.LocationID , gateId.DoorID ,cameraId.CameraID)
        console.log(res.data.data)
        console.log(res)
           if(res.data.data != null){
            console.log(res.data.data)
            setImagesList(res.data.data)  
          }
      })
      .catch(err => console.log(err));
}, [cameraId , intervalNum])

useEffect(() => {
  const interval = setInterval(() => setIntervalNum(rand()), 2000);

  return () => clearInterval(interval);
}, []);

// ......................................................................................................
const getOneCustomer = async (img) => {
  console.log(img)
  setOpenPopup(true)
  setContent(img)
}

    return (
        <div>
         <Nav removeNav={removeNav}/> 
          <Grid style={{padding:"0 20px"}} container spacing={1}
          style={{overflowX:"hidden", margin:"0 -10px"}} >
   
{/* ---------------------------------------------------------------------------------------------------------------------------------- */}
<Popup
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          // title={content.CameraName}
          content={content}
          // ConfirmDeleteHandler={ConfirmDeleteHandler}
          // loading={loading}
        /> 

<Grid style={{marginTop:"25px"}} item xs={12} sm={12} md={12} lg={12}>
</Grid>    

<Grid style={{marginTop:"25px"}} item xs={12} sm={12} md={12} lg={12}>
    <DragDropContext onDragEnd={handleOnDragEnd}>
    <Droppable droppableId="characters">
      {(provided) => (
        <Grid  style={{overflowX:"hidden", margin:"0 -10px"}} container spacing={2} className="" {...provided.droppableProps} ref={provided.innerRef}>
          {imagesList .map((img ,index) => ( 
            
              <Draggable key={img.CameraID} draggableId={img.CameraID} index={index}>
                {(provided) => (
                  <Grid className="tetet" item xs={imagesList.length== 1 ? (12):(12) } sm={imagesList.length == 1 ? (12):(3)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                 
            <div className={classes.root}>
            <Typography
            align ="center"
            variant="h3"
            color="primary"
            >
            <span className='blink_me'> . </span> {img.CameraName}   
            </Typography>
    {img.LPRID !== 0 ? (
        <>
            <div className='d-flex justify-content-between'> 
                <Typography className='{classes.flexion}'  align ="center" variant="h6">
                    {img.LPRTime} <AccessAlarmsIcon color="primary"/>
                </Typography>
                <Typography className={classes.flexion}  align ="center" variant="h6" >
                {/* {LPRDate} */}
                {img.LPRDate?((img.LPRDate).slice(0, 10)):("")}<EventNoteIcon color="primary"/>
                </Typography>               
            </div>
     <div className="d-flex align-items-center imgContainer">
     <div className="">
                <img loading="lazy"  style={{maxHeight: imagesList.length == 1 ?('45vh') :("700px"), width:"100%" , objectFit: 'contain'}} src={img.CarImage} />
              
            </div>
            <img loading="lazy" style={{maxHeight: imagesList.length == 1 ?('45vh') :("700px"),  objectFit: 'contain', width:"100%"}} src={img.FaceImagePath} />
            {/* <img loading="lazy" style={{maxHeight: length == 1 ?('30vh') :("300px"),  objectFit: 'contain', width:"50%"}} src={FaceImage} /> */}
            <p>123  {img.LicenseNumber}</p>

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
                )}
              </Draggable>
            
              ))}

        </Grid>
      )}
    </Droppable>
    </DragDropContext>
</Grid>

          </Grid>

         </div>
    )
}

export default Home
