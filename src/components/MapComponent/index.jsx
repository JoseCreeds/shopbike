import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import PropTypes from 'prop-types'

const MapComponent = ({ latitude, longitude }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  }

  const center = {
    lat: latitude,
    lng: longitude,
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyD7TypZFTl4Z3gVtikNOdGSfNTpnmq-ahQ">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}
// Ajouter la validation des props avec PropTypes
MapComponent.propTypes = {
  latitude: PropTypes.number.isRequired, // latitude doit être un nombre
  longitude: PropTypes.number.isRequired, // longitude doit être un nombre
}

export default MapComponent
