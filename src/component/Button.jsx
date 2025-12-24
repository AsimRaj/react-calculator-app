import React from "react";

export const Button = ({ label, onClick, className = "" }) => {
  return (
    <button
     onClick={() => onClick(label)} 
     className={`btn ${className}`}>
      {label}
    </button>
  );
};