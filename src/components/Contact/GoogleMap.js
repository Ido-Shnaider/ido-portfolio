import React from "react";

const GoogleMap = () => {
  return (
    <div className="google-map-code">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d107319.13642224055!2d35.08681615947015!3d32.799602907092684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1siw!2slb!4v1713024046184!5m2!1siw!2slb"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0" >   
    </iframe>
    </div>
  );
};

export default GoogleMap;