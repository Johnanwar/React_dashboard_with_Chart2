import React , {useState , useEffect ,useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
 import { createAPIEndpoint, ENDPIONTS } from "../../api";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Grid} from '@material-ui/core';
import Form from "../../shared/Form";
import {Link} from 'react-router-dom'
 import {LocationContext} from '../../contexts/LocationContext'
 import Checkbox from '@material-ui/core/Checkbox';
 import FormControlLabel from '@material-ui/core/FormControlLabel';
import Btn from "../../controls/Button"
// import Locations from "./Locations"



const useStyles = makeStyles((theme) => ({
  root: {
     padding:"0 20px"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    coontainer:{
        margin:"14px 0",
    }
  }));
  
  function Setting({setActiveSlider , activeSlider}) {
    const { locationId  ,setLocationId , gateId , setGateId ,cameraId ,setCameraId ,setApply} = useContext(LocationContext)

 
    const classes = useStyles();
    //locations array
    const [locations, setLocations] = useState([])

    //gates array
    const [gates, setGates] = useState([])

    //cameras array
    const [cameras, setcameras] = useState([])
    

    // get all locations
    useEffect(() => {
      createAPIEndpoint(ENDPIONTS.LOCATIONS).fetchAll()
          .then(res => {
              if(res.data.data != null){
                console.log(res.data.data)
                setLocations(res.data.data)                
              }
          })
        
          .catch(err => console.log(err));
    }, [])


    //get gates by location id 
      useEffect(() => {
        if(locationId !== null && locationId.LocationID !==""){   
            createAPIEndpoint(ENDPIONTS.GATES).fetchById(locationId.LocationID)
                .then(res => {
                    if(res.data.data != null){
                      console.log(res.data.data)
                      setGates(res.data.data)                
                    }
                })
                .catch(err => console.log(err));   
              } 
      }, [locationId])
    //get cameras by gate id 
    useEffect(() => {
      if(gateId !== null && gateId.DoorID !==""){   
        createAPIEndpoint(ENDPIONTS.CAMERAS).fetchById(gateId.DoorID)
            .then(res => {
              console.log(res.data.data)
              console.log(gateId)
                if(res.data.data != null){
                  console.log(res.data.data)
                  setcameras(res.data.data)                
                }
            })
            .catch(err => console.log(err));
        }
    }, [gateId])

    const changeLocation = (val) => {
    //  console.log(val)
     setLocationId(val)
     setGateId({DoorID: 0 , DoorName:' '})
     setCameraId({CameraID: 0 , CameraName:''})

    }
    const changeGates = (val) => {
      setGateId(val)
      setCameraId({CameraID: 0 , CameraName:''})

    }
    const changeCameras = (val) => {
         setCameraId(val)
    }
   ///// check box 
   const [checked, setChecked] = useState(true);

   const handleChange = (event) => {
     setChecked(event.target.checked);
     if(checked == false){
      setLocationId({LocationID: '0' , LocationName:''})
      setGateId({DoorID: '0' , DoorName:' '})
      setCameraId({CameraID: '0' , CameraName:''})
     }
  
   };
  //  ...................................................................
  const handleApply = ()=>{
    setApply(false);
    setActiveSlider(!activeSlider)
  }


    return (
        <div>
           <Grid className={classes.root} container spacing={1}
          style={{overflowX:"hidden", margin:"0 -10px"}}>

            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.coontainer}>
                  <FormControlLabel                  
                        control={<Checkbox checked={checked}
                        color="primary"
                         onChange={handleChange} name="gilad" />}
                        label=" عرض كل الكاميرات "
                    />          
               
            </Grid>    


            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.coontainer}>
            <Autocomplete
            disabled={checked}
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
                            label="المواقع"
                            variant="outlined"
                            name="locats"
                          />
                        )}
                        /> 
            </Grid>

           <Grid item xs={12} sm={12} md={12} lg={12} className={classes.coontainer}>
             <Autocomplete
                        disabled={checked}
                        id="country-select-demo"
                        options={gates}
                        onChange={(e, value) => changeGates(value)}
                      getOptionSelected={(option, value) => option.DoorID === value.DoorID}
                      value={gateId}
                        autoHighlight
                        getOptionLabel={(option) => option.DoorName}
                        renderOption={(option) => (
                          <React.Fragment>
                            {option.DoorName} 
                          </React.Fragment>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="البوابات"
                            variant="outlined"
                            name="gate"
                          />
                        )}
                        /> 
            </Grid>

            
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.coontainer}>
            <Autocomplete
                        disabled={checked}
                        id="country-select-demo"
                        options={cameras}
                        onChange={(e, value) => changeCameras(value)}
                      getOptionSelected={(option, value) => option.CameraID === value.CameraID}
                      value={cameraId}
                        autoHighlight
                        getOptionLabel={(option) => option.CameraName}
                        renderOption={(option) => (
                          <React.Fragment>
                            {option.CameraName} 
                          </React.Fragment>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="الكاميرا"
                            variant="outlined"
                            name="cam"
                          />
                        )}
                        /> 
            </Grid>    

            <Btn
            style={{width:"100%"}}
            color="primary"
             onClick={handleApply}
            > 
            تطبيق 

            </Btn>
{/* ---------------------------------------------------------------------------------------------------------------------------------- */}
              
 
          </Grid>

         </div>
    )
}

export default Setting


// Jesusph_freddy123 To speed things up here, I will have to ask a member of our team who specializes in  server side issues to take care of this for you. Your reference number is ticket  32810544
//  sure this is the case ID- 32810930

