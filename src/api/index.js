import axios from "axios";

const BASE_URL = 'http://localhost:62295/api/'; // local host VS
// const BASE_URL = '/api/';
// const BASE_URL = 'http://150.150.150.150:8095/api/'; // abdeen iis

// const BASE_URL = 'http://170.10.0.250:8085/api/';  /// watnya
// const BASE_URL = 'http://192.168.0.141:8090/api/';



// const header = `AccessToken  ${headerToken}` 
// const headersss = {
//    'Content-Type': 'application/json',
//      'AccessToken':headerToken
//  }

export const ENDPIONTS = {
   
   LOGIN: 'Account/Login',

//get all locations : api/Camera/GetLocations
LOCATIONS: 'Camera/GetLocations',

// Get LOCATIONS BY ID : api/Camera/GetLocationByID/{LocationID}
LOCATIONBYID : "Camera/GetLocationByID",

// Get ALL GATES : api/Camera/GetGates / location id
GATES : "Camera/GetGates",
   
// Get GATES BY ID : api/Camera/GetGateByID/{GateID}
GATESBYID : "Camera/GetGateByID",

// Get : api/Camera/GetCameras/{GateID}
CAMERAS : "Camera/GetCameras",

// Get CAMERA BY ID : api/Camera/GetCameraByID/{CameraID}
CAMERBYID : "Camera/GetCameraByID",

 // Get : api/Camera/GetCameraByID/{CameraID}
 CAMERAIMGBYID : "Camera/GetCameraByID",

// Get : api/Camera/GetCameraImages
 CAMERAIMAGES :"Camera/GetCameraImages",

   // Get : api/Camera/GetStatisitcsByTime
GETSTATICSBYTIME : "Camera/GetStatisitcsByTime",

  // Get : api/Camera/GetLocationsStatistics
 GETLOCATIONSSTATISTICS :"Camera/GetLocationsStatistics" ,
}


export const createAPIEndpoint = endpoint => {
   

const headerToken  = localStorage.getItem('AccessToken');

   // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
   // axios.defaults.headers.common['AccessToken'] = header
    let url = BASE_URL + endpoint + '/';
    return {
        fetchAll: () => axios.get(url ),
        fetchById: id => axios.get(url + id),
        fetchBylocationAndCamera: (LocationID , GateID ,CameraID )  => axios.get(url + LocationID + '/' + GateID + '/' + CameraID  ,),


        fetchByIdAndYear: (id , item )  => axios.get(url + id + '/' + item  ,
         { 
            headers: {
         'AccessToken': headerToken
         } 
       }
         ),
        // post new record
        create: newRecord => axios.post(url, newRecord ,
         { 
            headers: {
           'AccessToken': headerToken
           } 
         }
          ),
      //   post data to form 6 GetPrison
        createPrison:  (id , item , newRecord)  => axios.post(url + id + '/' + item, newRecord ,
        { 
         headers: {
        'AccessToken': headerToken
        } 
        } 
        ),
      //   update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        delete: (id , objId) => axios.delete(url + id + '/' + objId , 
        { 
         headers: {
      'AccessToken': headerToken
      } 
    }
        )
    }
}