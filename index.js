// REMEMBER TO NPM START / BUILD*****
import fetch from 'node-fetch';

const COLORS = 'https://nt-cdn.s3.amazonaws.com/colors.json';

// async function to fetch colors json and execute commands based on function parameters
const fetchColors = async ({ name, hex, compName, compHex }) => {

  // fetch colors json
  try {
    const response = await fetch(COLORS);

    // throw error if network issue (rather than fetch issue) 
    if (!response.ok) {
      throw new Error(`Network response was not OK: ${error.message}`);
    }

    // await successful fetch then log complete message
    const colors = await response.json();
    console.log("Fetch complete.");

    // conditionals that execute based on function parameters
    if (name) {
      // I do not have experience with case insensitive filtering, so I used MDN's documentation example based on toLowerCase
      // I saw that regex can also be used
      let result = colors.filter((color) => color.name.toLowerCase().includes(name.toLowerCase()));
      return result;
    } 

  // catch and log fetch error
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  } 
};

export default fetchColors;
