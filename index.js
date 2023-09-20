/* Note to TA: I forgot to make commits as I worked on this, so I went back when I was done and 
*  broke my code into logical pieces and committed each logical piece in sequence...hence, 
*  the commit timeline is inaccurate...it took me much longer to create this code than
*  it would appear when looking at the commit timing (in particular, I struggled with the 
*  compName/compHex filtering a lot...wasn't sure the best way to access the nested objects).
*/

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
    } else if (hex) {
      // filter array based on hex param
      let result = colors.filter((color) => color.hex === hex);
      return result;
    } else if (compName) {
      // filter array based on compName param
      let result = colors.filter((color) => {
        // for each color element, return true to filter if comp.name includes compName
        for (let i=0; i < color.comp.length; i++){
          if (color.comp[i].name.toLowerCase().includes(compName.toLowerCase())){
            return true;
          }
        }
      });
      return result;
    } else if (compHex) {
      // filter array based on compHex param
      let result = colors.filter((color) => {
        // for each color element, return true to filter if comp.hex matches compHex
        for (let i=0; i < color.comp.length; i++){
          if (color.comp[i].hex === compHex){
            return true;
          }
        }
      });
      return result;
    }
  // catch and log fetch error
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  } 
};

export default fetchColors;
