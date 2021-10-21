import imagen from "./paz.jpg"
import React from 'react';
import SongSearch from './components/SongSearch';
//import { Paper } from "@material-ui/core/Paper";

const styles = {
  paperContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url(${imagen})`,
    with:"100%",
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  },

  im:{
    marginBottom:"50px"
  }
};

const App=()=> {
  //const classes = useStyles();
  return (
    <div style={styles.paperContainer} >
      <section style={styles.im}>
      <SongSearch/>  
      </section>    
    </div>
  );
}

export default App;
