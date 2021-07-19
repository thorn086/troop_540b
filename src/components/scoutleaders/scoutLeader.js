import React from 'react';
import { scoutLeaderData } from "../../Data/scoutLeaderData";
import './scoutLeader.css';

function ScoutLeader(props) {
    return (props.trigger2) ? (
        <div id='leader_modal'>
            <div id='leader_box'>
                <button id="leader_close" onClick={() => props.setTrigger2(false)}>X</button>
                <p id ='ld_modal_title'>Names of our past and present Scout Masters:</p>
                <ul id='leader_list'>
                    {scoutLeaderData.map((leader, index) => {
                        return (
                            <li key={index} className={leader.name}>
                                {leader.year + ' '} {leader.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    ) : '';
}
export default ScoutLeader;