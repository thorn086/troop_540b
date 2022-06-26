import React from "react";
import './Events.css';





function TroopMeet() {
    return (
        <section id='troop__events'>
            <h2> Troop Meetings</h2>
            <div id="event_dates">
                <div id='troop-dates'>
                    <h4>**ALL scouts please BRING YOUR SCOUT BOOKS and WEAR CLASS A UNIFORM during troop meetings and outings!**</h4>
                    <br />
                    <h5 className='dates'> Troop Meeting July 14th, 2022 6:30 - 8:30 PM
                        <br />
                        <a id='st_charels' target="blank" href="https://www.google.com/maps/place/3100+W+Parnell+Ave,+Milwaukee,+WI+53221/@42.9427161,-87.9567283,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ac9697935:0xe92986f1420fc0d1!8m2!3d42.9427161!4d-87.9545396?hl=en">
                            St. Charels Borromeo
                        </a></h5>
                        <br />
                        <br />
                        <h4>**Please note that there will be NO MEETINGS during August, but will resume in September!**</h4>
                </div>
            </div>
        </section>
    );
}
export default TroopMeet;