import React, { useState, useEffect } from 'react';
import { photoData } from '../../Data/photo';
import Button from '@mui/material/Button';
import './Extrapics.css';
import { Link } from 'react-router-dom';

function Exprapics(picID) {

    const [album, setAlbum] = useState([]);
    const [name, setName] = useState();
    useEffect(() => {
        function fetchData() {
            const test = photoData.filter(id => id.id === picID.picId);

            setAlbum(
                test[0].remaining_imgs
            )
            setName(
                test[0].name
            )
            return test;
        }
        fetchData();
    }, [picID]);

    return (
        < div className="image__container" >
            <div className="row__posters2">
                <h2 className="album__name">{name}</h2>
                <div className="pic__row">
                    {album.length !== 0 ? album.slice(0, 8).map((pic, index) => {
                        return <img className='row__poster2'
                            key={index}
                            src={pic}
                            alt={name} />
                    }) : <h2 className='missing_pics'> Sorry, there are no photos in this album. Please check back soon!</h2>

                    }
                </div>
                {
                    album.length !== 0 ? <Button component={Link} to={`/Gallery/album/${name}`}
                        data={name} variant="contained" className='button__exp'>
                        "View all {album.length} Photos" </Button> : ""
                }

            </div>


        </div >
    )
}

export default Exprapics
