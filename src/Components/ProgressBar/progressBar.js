import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 10,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50
    }
  
    const fillerStyles = {
      height: 10,
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
    }
  
    const labelStyles = {
      padding: 1,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}> </span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;