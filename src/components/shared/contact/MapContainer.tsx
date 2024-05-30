"use client";

import { FC } from "react";
import Map, { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapContainer: FC = () => {
  return (
    <div className="h-[740px] w-full">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!}
        mapLib={mapboxgl}
        initialViewState={{
          latitude: 22.57,
          longitude: 88.36,
          zoom: 10,
        }}
        style={{ borderRadius: "6px" }}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
      >
        <Marker latitude={22.57} longitude={88.36} />
      </Map>
    </div>
  );
};

export default MapContainer;
