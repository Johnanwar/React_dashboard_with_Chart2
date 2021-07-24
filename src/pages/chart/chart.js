import React ,{useState , useEffect} from 'react';
import Nav from "../../components/nav/nav"
import { Pie ,PolarArea , Doughnut  , Line  , Bar } from 'react-chartjs-2';
import { Grid , Typography , makeStyles} from '@material-ui/core';
import { createAPIEndpoint, ENDPIONTS } from "../../api";
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: '4px 1px 10px 2px #ccc',
    padding: '20px',
  },
}));



   function Chart() {
    const classes = useStyles();
    const [staticsTime, setStaticsTime] = useState([]);
    const [staticsLocations, setStaticsLocations] = useState([]);
    const [staticsCarCounter, setStaticsCarCounter] = useState([]);



    useEffect(() => {
      createAPIEndpoint(ENDPIONTS.GETSTATICSBYTIME).fetchAll()
          .then(res => {
               if(res.data.data != null){
                var dataArry= []
                for (var key in res.data.data) {
                  if (res.data.data.hasOwnProperty(key)) {
                      dataArry.push(res.data.data[key])
                  }
              }
                setStaticsTime(dataArry)
              }
          })
          .catch(err => console.log(err));
          }, [])

    // ........................................................................................

    useEffect(() => {
      createAPIEndpoint(ENDPIONTS.GETLOCATIONSSTATISTICS).fetchAll()
          .then(res => {
               if(res.data.data != null){
                //  console.log(res.data.data )
                var locationNameArray = [] 
                var carCounterArray = [] 
                res.data.data.forEach((item ,idx) => {
                  locationNameArray.push(item.LocationName)
                  carCounterArray.push(item.CarCounter)
                  setStaticsLocations(locationNameArray)
                  setStaticsCarCounter(carCounterArray)
                })
              }
          })
          .catch(err => console.log(err));
    }, [])



    const dataw =  ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00' , '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00' ,'15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00' ,'22:00', '23:00', ]

    // const [data, setData] = useState([]);
    const data = {
      labels: dataw,
      datasets: [
        {
          label: '# الزائرين',
          data: staticsTime,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(52, 235, 128, 0.2)',
            'rgba(52, 162, 235, 0.2)',
            'rgba(52, 79, 235, 0.2)',
            'rgba(147, 52, 235, 0.2)',
            'rgba(235, 52, 140, 0.2)',
            'rgba(83, 150, 137, 0.2)',
            'rgba(82, 13, 212, 0.2)',
            'rgba(252, 8, 73, 0.2)',
            'rgba(252, 207, 8, 0.2)',
            'rgba(179, 191, 11, 0.2)',
            'rgba(240, 97, 26, 0.2)',
            'rgba(203, 209, 13, 0.2)',
            'rgba(56, 232, 235, 0.2)',
            'rgba(5, 150, 240, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(52, 235, 128, 0.1)',
            'rgba(52, 162, 235, 0.1)',
            'rgba(52, 79, 235, 0.1)',
            'rgba(147, 52, 235, 0.1)',
            'rgba(235, 52, 140, 0.1)',
            'rgba(83, 150, 137, 0.1)',
            'rgba(82, 13, 212, 0.1)',
            'rgba(252, 8, 73, 0.1)',
            'rgba(252, 207, 8, 0.1)',
            'rgba(179, 191, 11, 0.1)',
            'rgba(240, 97, 26, 0.1)',
            'rgba(203, 209, 13, 0.1)',
            'rgba(56, 232, 235, 0.1)',
            'rgba(5, 150, 240, 0.1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    const LocationData = {
      labels: staticsLocations,
      options: {
        animation: {
          duration: 0,
          loop:false,
        }
      },
      datasets: [
        {
          label: '# الزائرين',
          data: staticsCarCounter,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(52, 235, 128, 0.2)',
            'rgba(52, 162, 235, 0.2)',
            'rgba(52, 79, 235, 0.2)',
            'rgba(147, 52, 235, 0.2)',
            'rgba(235, 52, 140, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(52, 235, 128, 0.1)',
            'rgba(52, 162, 235, 0.1)',
            'rgba(52, 79, 235, 0.1)',
            'rgba(147, 52, 235, 0.1)',
            'rgba(235, 52, 140, 0.1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    
 



const [removeNav, setRemoveNav] = useState(false);


    return (


      <>
      <div>
     <Nav
       removeNav={removeNav}
     /> 
      <Grid  container spacing={1}
      style={{overflowX:"hidden", margin:"0 -10px"}} >

{/* ---------------------------------------------------------------------------------------------------------------------------------- */}
      <Grid style={{margin:"25px 0"}} item xs={12} sm={6} md={6} lg={6}>
        <div className={classes.root}>
            <Typography
                      align ="center"
                      variant="h3"
                      color="primary"
                      gutterBottom
                      
                      >
                      عدد الزيارات في كل ساعه 
            </Typography>
            <Bar data={data}  />
        </div>
      </Grid> 
      <Grid style={{margin:"25px 0"}} item xs={12} sm={6} md={6} lg={6}>
      <div className={classes.root}>
          <Typography
                    align ="center"
                    variant="h3"
                    gutterBottom
                    color="primary"
                    >
                    عدد الزيارات في كل موقع 
          </Typography>
    
          <Bar data={LocationData}  />
          </div>
      </Grid> 


  </Grid> 
  </div>

</>

    )
  }

export default Chart;