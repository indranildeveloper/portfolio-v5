"use client";

import { motion } from "framer-motion";
import Map, { Marker } from "react-map-gl";
import { contactVariants } from "@/animations/contactVariants";
import "mapbox-gl/dist/mapbox-gl.css";

const MapContainer = () => {
  return (
    <motion.div variants={contactVariants} className="h-[740px] w-full">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!}
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
    </motion.div>
  );
};

export default MapContainer;
