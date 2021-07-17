import React from 'react';
import { EaglescoutData } from "../../Data/EagleScoutData";
import './EagleScout.css';

function EagleScout(props) {
    return (props.trigger) ? (
        <div id='eaglescout_modal'>
            <div id='eaglescout_box'>
                <button id="scout_close" onClick={() => props.setTrigger(false)}>X</button>
                <p className ='modal_title'>List of all of the scouts who reached Eagle </p>
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