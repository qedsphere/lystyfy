import React from 'react'
import { useState, useEffect} from 'react'
import SearchBar from "./SearchBar"
import Panel from "../../templates/Panel"
{/*<div style={{ height: '100%', width: '100%' }}>*/}

import "./SearchMenu.css"

const sampleData = [
    'Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Blueberry', 'Pineapple'
  ];

function SearchMenu(){
    return (
        <>
            <div className="search-container">
              <h1></h1>
              
              <SearchBar data={sampleData} />
              
              <Panel backgroundColor="#000000" borderRadius="20px" flexWidth={2} children={<SearchMenu></SearchMenu>}>
                  <h1> This is where albums go</h1>
              </Panel>
              </div>
              
           
        </>
    )
}

export default SearchMenu 