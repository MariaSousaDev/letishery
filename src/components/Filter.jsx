import React, { useState } from 'react'
import FilterItem from "./FilterItem";
import FilterEvent from "./FilterEvent";
import FilterGallery from './FilterGallery';
import { dataFilterWork, dataWork } from '../utils/dataWorks';
import { dataFilterEvent } from '../utils/dataEvent';
import { dataFilterGood, dataGood } from '../utils/dataGoods';

export default function Filter({type}) {

    const countries = dataFilterEvent
    const works = dataFilterWork
    const goods = dataFilterGood

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
            <p className='mb-2 inline text-sunglo-500 text- relative after:content-[""] after:absolute after:w-full after:h-[3px] after:bg-sunglo-100 after:bottom-0 after:left-0'>
                Filter by
            </p>
            <ul className='mb-10 mt-3'>
            {
                type === "events" ?
                    countries.map((country) => <FilterItem key={country.code} title={country.label} onClick={() => handleChangeCountryFilter(country.code)} isActive={countryFilter.includes(country.code)}  />) 
                    : type === "works" ?
                    works.map((work) => <FilterItem key={work.code} title={work.label} onClick={() => handleChangeCountryFilter(work.code)} isActive={countryFilter.includes(work.code)} />) 
                    : goods.map((good) => <FilterItem key={good.code} title={good.label} onClick={() => handleChangeCountryFilter(good.code)} isActive={countryFilter.includes(good.code)} />)
            }
            </ul>
            {
                type === "events" ? <FilterEvent code={countryFilter} /> : <FilterGallery code={countryFilter} data={type === "works" ? dataWork : dataGood} type={type === "works" ? 'works' : 'goods'} /> 
            }
            
        </div>
  )
}
