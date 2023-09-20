// REMEMBER TO NPM START / BUILD*****

import fetch from 'node-fetch';

const COLORS = 'https://nt-cdn.s3.amazonaws.com/colors.json';

/**
 * @param name filter for color name
 * @param hex filter for color hex code
 * @param compName filter for complementary color name
 * @param compHex filter for complementary color hex code
 * @returns Promise
 */

// async function to fetch colors
const fetchColors = async ({ name, hex, compName, compHex }) => {

  // try fetching colors
  try {
    const response = await fetch(COLORS);
    // throw error if network error occurs 
    if (!response.ok) {
      throw new Error(`Network response was not OK: ${error.message}`);
    }
    // await json data via fetch
    const colors = await response.json();
    // log successful download and response
    console.log("Download complete.", response);
  // catch fetch error
  } catch (error) {
    // log fetch error
    console.error(`Download error: ${error.message}`);
  } 

};

export default fetchColors;
