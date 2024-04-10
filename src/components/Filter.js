import React, { useState } from 'react'
import FilterItem from "./FilterItem";
import FilterList from "./FilterList";
import FilterWork from './FilterWork';

export default function Filter() {

    const countries = [{ label: "Netherlands", code: "nl" }, { label: "Spain", code: "es" }]
    const works = [{label:"OG", code:"og"}, {label:"Fanart",code:"fan"}]
    //"Commission", "Character Design", "Illustration", "Chibi"

    const [countryFilter, setCountryFilter] = useState([])

    const isActive = (code) => {
        console.log("countryFilter", countryFilter);
        return countryFilter.includes(code)
     }

    const handleChangeCountryFilter = (code) => { 
        console.log("handleChangeCountryFilter",code);
        console.log("countryFilter.includes(code)", countryFilter.includes(code));

        if (!countryFilter.includes(code)) {
            setCountryFilter((prevState) => { prevState.push(code); return prevState })
        } else {
            const countryFilterCopy = [...countryFilter].filter(entry => entry !== code)
            console.log("countryFilterCopy", countryFilterCopy);
            setCountryFilter(countryFilterCopy) 
        }
        
        
        // if (countryFilter.length === 0 ) {
        //     // console.log('show all');
        //     // let tmpCodes = [];
        //     // tmpCodes = Array.from(countries, country => country.code )
        //     // console.log(tmpCodes);
        //     // setCountryFilter(tmpCodes)
        // } else if(countryFilter.includes(code)){
        //     // setCountryFilter((prevState) => prevState.filter(entry => entry !== code)) 
        //     // console.log('show' + countryFilter);
        // } else {
        //     // console.log('show' + countryFilter);
        //     // setCountryFilter((prevState) => {prevState.push(code); ;return prevState})
        // }
    }
    
    return (
        <div>
            <ul className='mb-10 mt-10'>
            {
                
                    countries.map((country) => <FilterItem key={country.code} title={country.label} onClick={() => handleChangeCountryFilter(country.code)} isActive={() => isActive(country.code)}  />)
            }
            </ul>
            {
                <FilterList code={countryFilter} /> 
            }
            
        </div>
  )
}
