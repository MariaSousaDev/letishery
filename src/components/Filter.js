import React, { useState } from 'react'
import FilterItem from "./FilterItem";
import FilterList from "./FilterList";
import FilterWork from './FilterWork';

export default function Filter({type}) {

    const countries = [{ label: "Netherlands", code: "nl" }, { label: "Spain", code: "es" }]
    const works = [{ label: "OG", code: "og" }, { label: "Fanart", code: "fan" }, { label: "Commission", code: "comm" }, { label: "Character Design", code: "chara" }, { label: "Illustration", code: "illu" }, { label: "Chibi", code: "chibi" }]

    const [countryFilter, setCountryFilter] = useState([])

    const handleChangeCountryFilter = (code) => {
        let newCountryList = [...countryFilter];
        if (countryFilter.includes(code)) {
            newCountryList = [...countryFilter].filter(
                (filter) => filter.localeCompare(code) !== 0
            );
        } else {
            newCountryList.push(code);
        }
        setCountryFilter(newCountryList);
    };
    
    return (
        <div>
            <ul className='mb-10'>
            {
                type === "events" ?
                    countries.map((country) => <FilterItem key={country.code} title={country.label} onClick={() => handleChangeCountryFilter(country.code)} isActive={countryFilter.includes(country.code)}  />) :
                    works.map((work) => <FilterItem key={work.code} title={work.label} onClick={() => handleChangeCountryFilter(work.code)} isActive={countryFilter.includes(work.code)} />)
            }
            </ul>
            {
                type === "events" ? <FilterList code={countryFilter} /> : <FilterWork code={countryFilter} /> 
            }
            
        </div>
  )
}
