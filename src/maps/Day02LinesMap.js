import React, { useState, useEffect } from 'react'; 
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'; 
import axios from 'axios'; 
import 'leaflet/dist/leaflet.css'; 
import geojsonData from './data/rodovias_ne.geojson';


function Day02LinesMap() {
    const [geoData, setGeoData] = useState(null);
    const center = [-12.565, -38.613]; 
    // const center = [-12.418,-55.846]; 
  
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

export default Day02LinesMap;