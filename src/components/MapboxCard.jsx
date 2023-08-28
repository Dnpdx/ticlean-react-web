
import ReactMapGl, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";


const Maptoken = 'pk.eyJ1IjoiZG5wZHgiLCJhIjoiY2xqcmh1a3RnMGVlaDNsa2M0NTV3c2Z4ZiJ9.5gUWhKfbDZ6lGkg1t4_Ing';


const MapboxCard = () => {
  const lat = "16.4873182";
  const lng = "-95.0434807";

  
  return (
    <div className='p-4 my-8'>
      <ReactMapGl
      mapboxAccessToken={Maptoken}
      style={{ height: '400px', width: '100%'}}       
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom: 15,
       }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        
          <Marker
          latitude={lat}
          longitude={lng}
          
          >
            
           </Marker>
          
       
      
      </ReactMapGl>
    </div>
  )
};

export default MapboxCard;
