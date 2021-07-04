import React from 'react';
import { EaglescoutData } from "./EagleScoutData";
import './EagleScout.css';
import eaglescout from '../../img/eaglescout_badge.jpeg';

function EagleScout(props) {
    return (props.trigger) ? (
        <div id='eaglescout_modal'>
            <div id='eaglescout_box'>
                <button className="scout_close" onClick={() => props.setTrigger(false)}>X</button>
                <p className ='modal_title'>List of all of the scouts who reached Eagle </p>
                <img id='scoutimg' src={eaglescout} alt="Eagle Scout Badge logo" ></img>
                <ul id='eaglescout_list'>
                    {EaglescoutData.map((scout, index) => {
                        return (
                            <li key={index} className={scout.name}>
                                {scout.year + ' '} {scout.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    ) : '';
}
export default EagleScout;