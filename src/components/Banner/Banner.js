import React, { useState, useEffect } from 'react';
import { photoData } from '../../Data/photo';
import './banner.css';


function Banner() {
    const [banner, setBanner] = useState([]);


    useEffect(() => {
        function fetchData() {
            const request = []
            photoData.forEach((value) => {
                request.push(value);
            });
            setBanner(
                request[Math.floor(Math.random() * request.length)]

            );
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <div className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("${banner.main_image}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">

                <h1 className='banner__title'>
                    {banner?.name || banner?.title || banner?.year}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">View</button>
                    <button className="banner__button">My List</button>
                </div>
                <div className="banner__description">
                    <h1 className="banner__info">
                        {truncate(banner?.discription, 117)}
                    </h1>
                </div>
            </div>

        </div>
    )
}

export default Banner
