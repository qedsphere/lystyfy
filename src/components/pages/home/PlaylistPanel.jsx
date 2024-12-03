import React from 'react'
import { useState, useEffect} from 'react'
import SearchBar from "./SearchBar"
import Panel from "../../templates/Panel"
import PlaylistDisplay from './PlaylistDisplay'
import Settings from "./Settings"
{/*<div style={{ height: '100%', width: '100%' }}>*/}




function PlaylistPanel(){
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column-reverse', height: '100%', width: '100%' }}>
                <div style={{ display: 'flex', height: '95%', width: '90%',marginLeft: '5%',marginBottom: '5%', gap: '2%'}}>
                    
        
                    <Panel backgroundColor="#000000" borderRadius="20px" flexWidth={2} children={<PlaylistDisplay></PlaylistDisplay>}>
                    </Panel>
                    
                    
                    <Panel backgroundColor="#000000" borderRadius="20px" flexWidth={1} children={<Settings></Settings>} >
                    </Panel>
                    
                    
        
                    
                </div>

            </div>
            
              
        </>
    )
}

export default PlaylistPanel 