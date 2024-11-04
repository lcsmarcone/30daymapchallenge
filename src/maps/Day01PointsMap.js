import React, { useState, useEffect } from 'react'; // Import useState and useEffect from React
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'; // Import GeoJSON from react-leaflet
import axios from 'axios'; // Import axios for data fetching
import 'leaflet/dist/leaflet.css'; // Leaflet CSS for styling
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import geojsonData from './data/day01_points.geojson';


function Day01PointsMap() {
    const [geoData, setGeoData] = useState(null);
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

export default Day01PointsMap;