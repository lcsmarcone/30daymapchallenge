import React, { useState, useEffect } from 'react'; // Import useState and useEffect from React
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'; // Import GeoJSON from react-leaflet
import axios from 'axios'; // Import axios for data fetching
import 'leaflet/dist/leaflet.css'; // Leaflet CSS for styling
import geojsonData from './data/baseal.geojson';


function Day03PolygonMap() {
    const [geoData, setGeoData] = useState(null);
    // const center = [-12.418,-55.846]; 
    const center = [-12.565, -38.613]; 

  
    useEffect(() => {
    //   Fetch the GeoJSON data
      axios.get(geojsonData)
        .then(response => {
          setGeoData(response.data);
        })
        .catch(error => {
          console.error("Error loading the GeoJSON data:", error);
        });
    }, []);

  
    return (
      <MapContainer center={center} zoom={7} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {geoData && (
          <GeoJSON data={geoData} />
        )}
      </MapContainer>
    );
  }

export default Day03PolygonMap;