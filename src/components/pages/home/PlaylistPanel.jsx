import React from 'react'
import { useState, useEffect} from 'react'
import SearchBar from "./SearchBar"
import Panel from "../../templates/Panel"
{/*<div style={{ height: '100%', width: '100%' }}>*/}




function PlaylistPanel(){
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column-reverse', height: '100%', width: '100%' }}>
                <div style={{ display: 'flex', height: '80%', width: '90%',marginLeft: '5%',marginBottom: '5%', gap: '5%'}}>
                    
        
                    <Panel backgroundColor="#FFFFFF" borderRadius="20px" flexWidth={2} >
                    </Panel>
                    
                    
                    <Panel backgroundColor="#FFFFFF" borderRadius="20px" flexWidth={1} >
                    </Panel>
                    
                    
        
                    
                </div>

            </div>
            
              
        </>
    )
}

export default PlaylistPanel 