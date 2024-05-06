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
import FrontPageFooter from '../components/FrontPageFooter';
import axios from 'axios';
import { latestHomes } from '../data/property';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Heart from "react-heart"

const API_KEY = "Wxjc846YDgHe8OcA9A7J7dHj8EH9UnIb";

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
        <div className="zipCodeBody">
        <HeaderShift />
        <div className="zipCodeText" style={{ backgroundImage: `url(${houseBanner})`}}>
            <div>
                <div className="bannerText">
                    <h1 >Find Your Dream Home</h1>
                    <p >Please Enter your Desired ZipCode</p>
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
                <p className="discoverText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
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
                <p className="discoverText2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <Link to="/resources" className="discoverButton">Learn More</Link>
            </div>
            <img src={neighborhood} style={{width: '612px'}}/>
        </div>

        <div className="forSale discoverBottom">
            <img src={apartment} style={{width: '612px'}}/>
            <div className="forSaleText">
                <h1>Find New Properties</h1>
                <p className="discoverText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
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

        <div className="newHome">
            <h1 className="lateHome">Latest Homes in USER LOCATION:</h1>
            
            <div className="allHouses">
            {latestHomes.map((data, key) => {
                const [active, setActive] = useState(false)
          return (
            <div key={key}>
              <div className="wholeHouse">
              <img src={(`../src/assets/property/${data.image}`)} alt="" className='houseImg'/>
                <div className="houseDetails">
                    <div className="housePrice">${data.price}
                    <Heart isActive={active} onClick={() => setActive(!active)} className="heart" />
                    </div>
                    <div className="bedBathDetail"><h4 className="bold marginRight">{data.beds}</h4> Beds | <h4 className="bold marginRight marginLeft">{data.baths}</h4> Baths | <h4 className="bold marginRight marginLeft">{data.floorspace}</h4> sq.ft. </div>
                    <div className="homeAddress">{data.address}</div>
                    <div className="houseID">MLS ID #{data.id}, Type: <h4> {data.type}</h4></div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
        </div>

        <FrontPageFooter />
        </div>
    );
}

export default ZipCode