import React from "react";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapComponent extends React.Component {
  static defaultProps = {
    center: {
      lat: 40.270615,
      lng: -79.5563743
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="columns">
        <div className="column is-centered is-offset-one-quarter is-half">
          <div style={{ height: "50vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyAmfnpugo3zgohqIaMai0-2oGI6Afz0FVA"
              }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={40.270615}
                lng={-79.5563743}
                text={"Love Color Salon"}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  }
}

export default MapComponent;
