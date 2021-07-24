import React ,{useState, useEffect ,createContext } from 'react'
// import { createAPIEndpoint, ENDPIONTS } from "../api";



export const LocationContext = createContext()

export const LocationProvider =({children})=>{

     const [locationId, setLocationId] = useState({LocationID: 0 , LocationName:''},)
     const [gateId, setGateId] = useState({DoorID: 0 , DoorName:' '},)
     const [cameraId, setCameraId] = useState({CameraID: 0 , CameraName:' '},)
      const [apply , setApply] = useState (false)
        //   // fetch departments
        //   useEffect(() => {
        //     createAPIEndpoint(ENDPIONTS.DEPARTMENTS).fetchAll()
        //     .then(res => {
        //         setManagementValues(res.data.data)
        //     })
        //     .catch(err => console.log(err))
        //   }, [])

    return(
        <LocationContext.Provider value = {{locationId, setLocationId , gateId , setGateId , cameraId , setCameraId , apply , setApply}}
        >
            {children}
        </LocationContext.Provider>

    );

}