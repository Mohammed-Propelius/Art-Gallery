import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef, useState } from "react";

const Map = () => {
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const position = [-71.31039428710938, 41.48237991333008];
  const [zoom, setZoom] = useState(15);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: position,
      zoom: zoom,
      draggable: false,
      // scrollZoom: false,
    });

    // Set zoom limits
    map.current.setMaxZoom(16);
    map.current.setMinZoom(10);

    const marker = new mapboxgl.Marker({
      color: "#FFFFFF", // set marker color
      scale: 0.5, // set marker scale
      anchor: "bottom", // set anchor point to bottom
      draggable: false, // make the marker non-draggable
      offset: [-12, -800], // set the marker's anchor to the center of the image
      element: document.createElement("img"),
    })
      .setLngLat(position)
      .addTo(map.current);
    marker._element.src = "../../public/icon-location.svg"; // set the source of the image
  });
  return (
    <>
      <div>
        <div ref={mapContainer} className="h-[400px]" />
      </div>
    </>
  );
};
export default Map;
