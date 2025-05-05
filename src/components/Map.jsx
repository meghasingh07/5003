import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[450px]  overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13713.988590282504!2d76.62986740000001!3d30.76062345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1746076036005!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
