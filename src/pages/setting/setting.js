import React , {useState , useEffect ,useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Nav from"../../components/nav/nav"
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Grid} from '@material-ui/core';
import Form from "../../shared/Form";
import {Link} from 'react-router-dom'
 import {LocationContext} from '../../contexts/LocationContext'

// import Locations from "./Locations"



const useStyles = makeStyles((theme) => ({
  root: {
     padding:"0 20px"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  function Settings() {
    const { locationId  ,setLocationId , gateId , setGateId ,cameraId ,setCameraId} = useContext(LocationContext)

 
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
      // if(locationId.LocationID !==""){   
          createAPIEndpoint(ENDPIONTS.GATES).fetchById(locationId.LocationID)
              .then(res => {
                  if(res.data.data != null){
                    console.log(res.data.data)
                    setGates(res.data.data)                
                  }
              })
            
              .catch(err => console.log(err));
        // }
    }, [locationId])

    //get cameras by gate id 
    useEffect(() => {
      if(gateId.DoorID !==""){   
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
     setGateId({DoorID: 3 , DoorName:' '})
     setCameraId({CameraID: 3 , CameraName:''})

    }
    const changeGates = (val) => {
      setGateId(val)
      setCameraId({CameraID: 3 , CameraName:''})

    }
    const changeCameras = (val) => {
         setCameraId(val)
    }
   
////////////////////////////////////////////////////////     images    ////////////////////////////////////////////////
// useEffect(() => {
//   createAPIEndpoint(ENDPIONTS.CAMERAS).fetchById(gateId.DoorID)
//       .then(res => {
//         console.log(res.data.data)
//         console.log(gateId)
//            if(res.data.data != null){
//             console.log(res.data.data)
//             setcameras(res.data.data)                
//           }
//       })
//       .catch(err => console.log(err));
// }, [cameraId])

    return (
        <div>
         <Nav/> 
          <Grid className={classes.root} container spacing={1}
          style={{overflowX:"hidden", margin:"0 -10px"}} >
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <Autocomplete
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

           <Grid item xs={12} sm={4} md={4} lg={4}>
             <Autocomplete
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

            
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <Autocomplete
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

{/* ---------------------------------------------------------------------------------------------------------------------------------- */}
              
              
              {/* <link to="/"> go to home </link> */}

              <Link to="/">go to home </Link>
 
          </Grid>

         </div>
    )
}

export default Settings


// Jesusph_freddy123 To speed things up here, I will have to ask a member of our team who specializes in  server side issues to take care of this for you. Your reference number is ticket  32810544
//  sure this is the case ID- 32810930

