// @ts-ignore
import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";

const Map = () => {
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const position = [-71.31039428710938, 41.48237991333008];
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mohammed-k/clf9azlda00bx01q6gxivlegh",
      center: position,
      zoom: 15,
      draggable: false,
    });

    // Set zoom limits
    // @ts-ignore
    map.current.setMaxZoom(18);
    // @ts-ignore
    map.current.setMinZoom(15);

    const marker = new mapboxgl.Marker({
      scale: 0.5,
      anchor: "bottom",
      draggable: false,
      offset: [-12, -750],
      element: document.createElement("img"),
    })
      .setLngLat(position)
      .addTo(map.current);
    marker._element.src = "../../public/icon-location.svg"; // set the source of the image
  });
  return (
    <>
      <div>
        <div ref={mapContainer} className="h-[400px] 2xl:h-[650px]" />
      </div>
    </>
  );
};
export default Map;
