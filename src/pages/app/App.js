import './App.css';
import React from "react"

  // import Nav from "../../components/nav/nav"

// import { BrowserRouter or MemoryRouter as Router,Switch, Route } from "react-router-dom"
import { HashRouter as Router ,Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Setting from "../setting/setting"
import Chart from "../chart/chart"
// import Chart2 from "../chart/chart2"
// import Chart3 from "../chart/chart3"
import {ThemeProvider , createMuiTheme} from '@material-ui/core';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import {LocationProvider} from '../../contexts/LocationContext'
// import PrivateRoute from "../../PrivateRoute"


// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: "#115d8e",
      // light: '#3c44b126'
    },
    secondary: {
      main: "#dd1e1e",
    },
    
    background: {
      default: "#f4f5fd"
    },
  },
  typography: {
    fontFamily: 'Markazi',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
 })


function App({}) {
  return (
    <>
    <div
    style={{backgroundColor:"#fafafa",
    minHeight:'100vh'
    }} 
    className="App">
        <StylesProvider jss={jss}>
     <ThemeProvider theme={theme}>
<LocationProvider>
      <Router >

                 
{/* <Grid container spacing={1}
            style={{overflowX:"hidden", margin:"0 -10px"}}
            >

            
            <Grid item xs={12} sm={3} md={3} lg={3}>
               <RightNav
                num={EmployeeCode}
                type={FormYear}
               />
              </Grid>
              <Grid item xs={12} sm={9} md={9} lg={9}> */}

          <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/Setting" component={Setting} /> 
               <Route exact path="/Chart" component={Chart} />
               {/* <Route exact path="/Chart2" component={Chart2} /> */}
               {/* <Route exact path="/Chart3" component={Chart3} /> */}
           
         </Switch>
        
       </Router>

       </LocationProvider> 
      </ThemeProvider>
    </StylesProvider>
   
   

    </div>

            



</>
    
  );
}

export default App;
