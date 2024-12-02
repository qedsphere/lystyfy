import React from 'react'
import { useState, useEffect} from 'react'
import SearchBar from "./SearchBar"
import Panel from "../../templates/Panel"
{/*<div style={{ height: '100%', width: '100%' }}>*/}

import "./SearchMenu.css"
import PlaylistGrid from './PlaylistGrid'

const sampleData = [
    'Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Blueberry', 'Pineapple'
  ];

function SearchMenu(){
    return (
        <>
            <div className="search-container">
              <h1></h1>
              
              <SearchBar data={sampleData} />
              
              <Panel backgroundColor="#000000" borderRadius="20px" flexWidth={2} children={<PlaylistGrid></PlaylistGrid>}>
              </Panel>
              </div>
              
           
        </>
    )
}

export default SearchMenu 