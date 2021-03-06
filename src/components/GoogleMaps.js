import React, { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../context/AppContext";

export default function Map({ onMount, className, onMountProps, lat, lng }) {
  const ref = useRef();
  const [map, setMap] = useState();
  const { apiKey } = useContext(AppContext);

  useEffect(() => {
    const onLoad = () =>
      setMap(
        new window.google.maps.Map(ref.current, {
          center: { lat, lng },
          zoom: 15,
        })
      );
    if (!window.google) {
      const script = document.createElement(`script`);

      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;

      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [lat, lng, apiKey]);

  if (map && typeof onMount === `function`) onMount(map, onMountProps);

  return (
    <div
      style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
      {...{ ref, className }}
    />
  );
}
