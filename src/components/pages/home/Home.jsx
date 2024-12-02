import React from 'react'
import { useState, useEffect} from 'react'
import SearchMenu from "./SearchMenu"
import Panel from "../../templates/Panel"
import PlaylistPanel from './PlaylistPanel';
{/*<div style={{ height: '100%', width: '100%' }}>*/}






function Home(){
    
    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
          <Panel backgroundColor="#89928A" borderRadius="20px" flexWidth={3} children={<SearchMenu></SearchMenu>}>
              
              
          </Panel>
    
          <Panel backgroundColor="#D3ECC0" borderRadius="20px" flexWidth={6} children={<PlaylistPanel></PlaylistPanel>}>
          </Panel>
        </div>
      );
    
    
}



export default Home