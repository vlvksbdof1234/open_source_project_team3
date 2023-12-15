import React from "react"
import MoonLoader from "react-spinners/MoonLoader";

const LoadingSpinner = (isLoading) => {
  return (
    <div>
      <MoonLoader
          color="rgb(44, 144, 202)"
          height={15}
          width={5}
          radius={2}
          margin={2}
          
        />
    </div>
  );
};

export default LoadingSpinner;
