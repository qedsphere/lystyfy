import React, { useContext, useEffect, useState } from 'react';
import Panel from '../../templates/Panel';
import { useContexts } from '../../../contexts/Contexts.jsx';

import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Sort from './Sort.jsx';
import Create from './Create.jsx';


const theme = createTheme({
  palette: {
    white: {
      main: "#faf0e6",
      contrastText: "#000000",
    },
    black: {
      main: "#000000",
      contrastText: "#ffffff",
    },
  },
});


const Settings = () => {
  const [organized, setOrganized] = useState([]);
  const { selectedPlaylist, setSelectedPlaylist, songs, setSongs } = useContexts();
  const [isOrganized, setIsOrganized] = useState(false);
  const num_sliders = 5;
  const sliderLabels = ["BPM", "Key", "Energy", "Acousticness", "Bass"]
  const [sliderValues, setSliderValues] = useState(Array(num_sliders).fill(50));
  let id = 0;
  const updateSongId = () => {
    id = (id + 1);
    return id

  }

  const buttonID = (index) => {
    const handleChange = (event, newValue) => {
      let temp = [...sliderValues];
      temp[index] = newValue;
      setSliderValues(temp);
    };
    return handleChange
  }

  const generateOrganizedPlaylist = () => {
    setIsOrganized(true);
    setOrganized([songs, Sort(songs, sliderValues), false]);
  }

  const generateOrganizedPlaylistIrl = () => {
    Create(songs, selectedPlaylist);
  }

  const showOrganized = () => {

    setOrganized([organized[0], organized[1], !organized[2]]);
    if (!organized[2]) {
      setSongs(organized[1]);
    }
    else {
      setSongs(organized[0]);
    }

  }


  if (!selectedPlaylist) {
    return <div>Please select a playlist to view its songs.</div>;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ display:"flex", width: "100%", justifyContent: "center"}}>
          <div style={{ display: "flex", flexDirection: "column", width: "80%", textAlign: "center", gap: "20px", padding: "0" }}>
            <h1>Settings</h1>
            {
              sliderLabels.map((value, index) => {

                return (
                  <div key={updateSongId()}>


                    <div style={{display:"flex", flexDirection: "column", boxShadow: "true", alignItems:"center", justifyContent:"center", backgroundColor: '#faf0e6', textAlign: 'center', justifyItems: "center", width: "100%", borderRadius: "10px" }} >
                      <p style={{color:"black"}}>{value + ": " + sliderValues[index]}</p>
                      <div style={{ width: "70%", display: "flex", alignItems:"center", justifyContent:"center"}}>
                        <Slider size="medium" defaultValue={50} value={sliderValues[index]} onChange={buttonID(index)}></Slider>
                      </div>

                    </div>
                  </div>
                )


              })



            }

            {(showOrganized===true && organized && isOrganized  && songs === organized[0] || songs === organized[1]) &&
              (<Button variant="contained" color={"white"} onClick={generateOrganizedPlaylistIrl}>Push to Spotify</Button>)}

            {(organized && isOrganized && songs === organized[0] || songs === organized[1]) &&
              (<Button variant="contained" color={"white"} onClick={showOrganized}>Switch View</Button>)}
            
            {/* the below button choice disappears neatly, but the above doesn't render extra space when it is not visible. 
            alternatively we can manually prevent scrolling at some point*/}
            {/*
            organized && isOrganized && songs === organized[0] || songs === organized[1] ? (
              <Button variant="contained" color={"white"} onClick={showOrganized}>View!</Button>
            ) : (
              <Button variant="contained" color={"white"} disabled>View!</Button>
            )
            */}

            <Button variant="contained" color={"white"} onClick={generateOrganizedPlaylist}>Generate</Button>

            








          </div>

        </div>
      </ThemeProvider >



    </>
  );
};



export default Settings;