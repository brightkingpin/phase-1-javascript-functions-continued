// Define saturdayFun function with default parameter
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
  }


// Define mondayWork function as function expression
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }

// This is a function that returns another function which wraps an adjective in a given emphasis and returns a string with a personalized message.
function wrapAdjective(emphasis = "*") {
    return function(adjective = "special") {
      return `You are ${emphasis}${adjective}${emphasis}!`;
    };
  }
  
