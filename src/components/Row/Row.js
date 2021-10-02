import React, { useState } from 'react';
import { photoData } from '../../Data/photo';
import './Row.css';
import Extrapics from '../Extrapics/Exprapics';

function Row({ title }) {
    const [picLibrary, setPicLibrary] = useState("");
    const [filter, setFilter] = useState('false');
    const handleClick = (pic) => {
        if (picLibrary) {
            setPicLibrary('');
        } else {
            setPicLibrary(
                pic.id
            );
        }
    }
    const handleFilter = () => {
        setFilter(!filter);
    };

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {photoData.map((pic) => {
                    return title === pic.title ?
                        <img className={filter ? "row__poster" : "row__poster active"}
                            id={pic.id}
                            key={pic.id}
                            onClick={() => {
                                handleFilter();
                                handleClick(pic);
                            }}
                            src={pic.main_image}
                            alt={pic.name} /> :
                        ""
                })}
            </div>
            {picLibrary && <Extrapics picId={(picLibrary)} />}
        </div >
    )
}

export default Row;
