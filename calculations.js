// project_directory/calculations.js

export const compareDistances = (gasMileage, electricMileage, gasPrice, electricPrice) => {
    // Calculate distance a gas car can travel
    const gasDistance = gasMileage;
    
    // Calculate distance an electric car can travel
    const electricDistance = electricMileage * (gasPrice / electricPrice);
    
    // Calculate how much further can the electric car travel
    const additionalDistance = electricDistance - gasDistance;
  
    return {
      gasDistance,
      electricDistance,
      additionalDistance
    };
  };
  
  export const calculateSavings = (gasPrice, gasMileage, electricPrice, electricMileage, kmDriven) => {
    // Calculate annual gas cost
    const gasCost = gasPrice * (kmDriven / gasMileage);
  
    // Calculate annual electricity cost
    const electricityCost = electricPrice * (kmDriven / electricMileage);
  
    // Calculate cost savings from driving an electric car
    const savings = gasCost - electricityCost;
  
    return savings;
  };
  