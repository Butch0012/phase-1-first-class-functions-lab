// Code your solution in this file!
// returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    // Get the first driver and the second driver from the input array
    const firstDriver = drivers[0];
    const secondDriver = drivers[1];
    // Return them as an array
    return [firstDriver, secondDriver];
  };
  
  // returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    // Get the length of the input array
    const length = drivers.length;
    // Get the second-to-last driver and the last driver from the input array
    const secondLastDriver = drivers[length - 2];
    const lastDriver = drivers[length - 1];
    // Return them as an array
    return [secondLastDriver, lastDriver];
  };
  
  // selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier function
  const createFareMultiplier = function(integer) {
    // Return a function that multiplies a fare by the provided integer
    return function(fare) {
      return fare * integer;
    };
  };
  
  // fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers function
  const selectDifferentDrivers = function(drivers, fn) {
    // Call the provided function (returnFirstTwoDrivers or returnLastTwoDrivers)
    // with the input drivers array and return the result
    return fn(drivers);
  };