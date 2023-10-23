import React from "react";
import './Events.css';





function TroopMeet() {
    return (
        <section id='troop__events'>
            <h2> Troop Meetings</h2>
                <div id='troop-dates'>
                    <h4>**ALL scouts please BRING YOUR SCOUT BOOKS and WEAR CLASS A UNIFORM during troop meetings and outings!**</h4>
                    <br />
                    <h4>**WREATH ORDER FORMS DUE OCT 21ST!!!**</h4>
                        <br />
                        <h5 className='dates'> Troop Meeting October 26th, 2023 6:30-8 PM
                        <br />
                        <a id='st_charels' target="blank" href="https://www.google.com/maps/place/St.+Charles+Borromeo+School/@42.942615,-87.9567306,17z/data=!3m1!4b1!4m5!3m4!1s0x8805116ad48ca715:0x4cdeaa0ccbf337!8m2!3d42.9426111!4d-87.9545366">
                            St. Charels Borromeo
                        </a></h5>
                </div>
        </section>
    );
}
export default TroopMeet;