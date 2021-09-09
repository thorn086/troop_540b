import React from 'react';
import { photoData } from '../../Data/2019';
import './Row.css';

function Row({ title }) {
    console.log(title);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {photoData.map((pic) => {
                    return title === pic.title ?
                        <img className='row__poster' key={pic.id} src={pic.main_image} alt={pic.name} /> :
                        ""

                })}
            </div>
        </div>
    )
}

export default Row;
