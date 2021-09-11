import React from 'react';
import { photoData } from '../../Data/photo';
import './Row.css';

function Row({ title }) {
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {photoData.map((pic, index) => {
                    return title === pic.title ?
                        <img className='row__poster' key={index} src={pic.main_image} alt={pic.name} /> :
                        ""
                })}
            </div>
        </div>
    )
}

export default Row;
