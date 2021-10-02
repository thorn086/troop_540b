import React, { useState, useEffect } from 'react';
import { photoData } from '../../Data/photo';
import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import './Album.css';


export default function Album(props) {
    const [album2, setAlbum2] = useState();
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        console.log('data name', props.match.params.name);
        async function fetchData() {
            var test2 = photoData.filter(name => name.name === props.match.params.name);
            setAlbum2(
                test2[0]
            )
            setHasLoaded(true);
            return test2;
        }
        fetchData();
    }, [props]);

    const render = () => {
        if (hasLoaded !== false) {

            const pics = album2.remaining_imgs.map((pic, index) => (
                <img className='row__poster3'
                    key={index}
                    src={pic}
                    alt="camping" />
            ));
            return (
                <div>
                    <Header />
                    <Link id='back__link' to='/Gallery'>Back</Link>
                    <div className='photo__container'>
                        {pics}
                    </div>
                </div>
            )

        } else {
            return hasLoaded ? <p>No data found for: {props.sentence}</p> : <p>Loading...</p>;
        }
    }
    return render();
}

