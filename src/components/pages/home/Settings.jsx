import React, { useEffect, useState } from 'react';
import Panel from '../../templates/Panel';
import { usePlaylist } from '../../../contexts/PlaylistContext'; 
import { useSongs } from '../../../contexts/SongsContext'; 

import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { ThemeProvider, createTheme } from "@mui/material/styles";



function shuffle(array) {
    let arr2=Array.from(array)
    let currentIndex = arr2.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [arr2[currentIndex], arr2[randomIndex]] = [
        arr2[randomIndex], arr2[currentIndex]];
    }
    return arr2
  }

const theme = createTheme({
    palette: {
      white: {
        main: "#ffffff",
        contrastText: "#000000",
      },
      black: {
        main: "#000000",
        contrastText: "#ffffff",
      },
    },
  });


const Settings = () => {
  const { selectedPlaylist } = usePlaylist(); 
  const [ organized, setOrganized] = useState(null);
  const {songs, setSongs} = useSongs();
  const [isOrganized, setIsOrganized] = useState(false);
  const num_sliders = 5;
  const sliderLabels = ["BPM","Key","Energy","Acousticness","Base"]
  const [sliderValues, setSliderValues] = useState(Array(num_sliders).fill(50));
  let id =0;
  const updateSongId = ()=>{
    id  = (id+1);
    return id

  }

  const buttonID = (index)=>{
    const handleChange = (event, newValue) => {
        let temp = [...sliderValues];
        temp[index]=newValue;
        setSliderValues(temp);
      };
    return handleChange
  }

  const generateOrganizedPlaylist = () => {
    setIsOrganized(true);
    setOrganized([songs,shuffle(songs), false]);
    console.log(organized)
  }
  
  const showOrganized = ()=>{

    setOrganized([organized[0],organized[1],!organized[2]]);
    if (!organized[2]){
        setSongs(organized[1]);
    }
    else{
        setSongs(organized[0]);
    }
    
  }


  if (!selectedPlaylist) {
    return <div>Please select a playlist to view its songs.</div>;
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <div style={{width:"100%", justifyItems: "center"}}>
    <div style={{display:"flex", flexDirection:"column", flexBasis:"10px", width:"80%", textAlign:"center", gap:"20px", padding:"0"}}>
        <h1>Settings</h1>
        {
            sliderLabels.map((value, index)=>{
                
                return(
                <div key={updateSongId()}>

                
                    <div style={{boxShadow:"true", backgroundColor:'darkgreen', textAlign:'center', justifyItems:"center", width: "100%", borderRadius: "10px"}} >
                    <p>{value+": "+sliderValues[index]}</p>
                    <div style={{width:"70%"}}>
                        <Slider size="medium" defaultValue={50} value={sliderValues[index]} onChange={buttonID(index)}></Slider>
                    </div>
                    
                    </div>
                    </div>
                )


            })

                
                
            }

        <Button variant="contained" color={"white"} onClick={generateOrganizedPlaylist}>Generate</Button>
        {
             organized !== null && isOrganized !== null && songs===organized[0] || songs===organized[1] ? (
                <Button variant="contained" color={"white"} onClick={showOrganized}>View!</Button>
              ) : (
                <Button  variant="contained" color={"white"} disabled>View!</Button>
              )
        }
        
        
        
                
        
        
        
       
    </div>
    
    </div>
    </ThemeProvider> 
    
    

    </>
  );
};



export default Settings;