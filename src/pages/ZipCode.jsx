import React, { useState, useEffect } from 'react';
import HeaderShift from '../components/HeaderShift';
import { Link } from 'react-router-dom';
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import '../cssFiles/ZipCode.css';
import houseBanner from "../assets/houseBanner.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import forSale from "../assets/forSale.png";
import neighborhood from "../assets/neighborhood.png";
import apartment from "../assets/apartment.png";
import Footer from '../components/Footer';
import ZipCodeCarousel from './ZipCodeCarousel';

const API_KEY = "AkUtgnA9vXFLN4HTUl6jbhDu6ppbu3mJ";

const ZipCode = () => {
    const [zipCodes, setZipCodes] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
  
    useEffect(() => {

        const url = `https://api.tomtom.com/search/2/structuredGeocode.json?key=${API_KEY}&countryCode=US&postalCode=${zipCodes}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const city = data.results[0].address.municipality;
                const state = data.results[0].address.countrySubdivision;
                
                setCity(city);
                setState(state);
            })
            .catch(error => {
                console.log(error);
            });

            
    }, [zipCodes]);


    const handleChange = (event) => {
        setZipCodes(event.target.value);
    };


    return(
        <div className="wholeZip">
        <div className="zipCodeBody">
        <HeaderShift />
        <div className="zipCodeText" style={{ backgroundImage: `url(${houseBanner})`}}>
            <div>
                <div className="bannerText">
                    <h1 className="banner">Find Your Dream Home</h1>
                    <p className="banner">Please Enter your Desired ZipCode</p>
                </div>

                <div className="bannerInput">
                    <input
                        inputMode="number"
                        className="zip"
                        placeholder='Enter ZipCode'
                        value={zipCodes}
                        onChange={handleChange} />   
                    <Link to={`/findHome/${zipCodes}/${city}/${state}`} className="zipButtons"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>

                </div>
            </div>
        </div>


        <div className="forSale">
            <img src={forSale}/>
            <div className="forSaleText">
                <h1>Discover New Homes</h1>
                <p className="discoverText">Enter a zipcode and use our tools to find the house that meets your needs!</p>
                <div >
                    <input
                        inputMode="number"
                        className="zip"
                        placeholder='Enter ZipCode'
                        value={zipCodes}
                        onChange={handleChange} />   
                    <Link to={`/findHome/${zipCodes}/${city}/${state}`} className="zipButtons"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>

                </div>
            </div>
        </div>

        <div className="forSale discoverBottom">
            <div className="forSaleTextL">
                <h1>Assess The Community</h1>
                <p className="discoverText2">We provide information on the walk, bike, and transit score as well as the distance to the nearest hospital so you can find not just a home, but also the community that is right for you!</p>
                <Link to="/resources" className="discoverButton">Learn More</Link>
            </div>
            <img src={neighborhood} style={{width: '612px'}}/>
        </div>

       
         
       
        <div className="newHome">
            <h1 className="lateHome">Latest Homes in New York:</h1>
            <ZipCodeCarousel />
        </div>
        </div>
        <Footer />
        </div>
    );
}

export default ZipCode