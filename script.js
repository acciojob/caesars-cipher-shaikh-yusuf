// Your Script here.
function rot13(str) {
  // Define an empty string to store the decoded result
  let decodedStr = "";

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Get the character at the current position
    const char = str[i];

    // Check if the character is an uppercase letter
    if (/[A-Z]/.test(char)) {
      // Calculate the ASCII code of the character
      let charCode = str.charCodeAt(i);

      // Check if the character is in the first half of the alphabet (A-M)
      if (charCode >= 65 && charCode <= 77) {
        // Shift the character code by 13 positions forward
        charCode += 13;
      } else {
        // Shift the character code by 13 positions backward
        charCode -= 13;
      }

      // Convert the new character code back to a character and append it to the decoded string
      decodedStr += String.fromCharCode(charCode);
    } else {
      // If the character is not an uppercase letter, simply append it to the decoded string
      decodedStr += char;
    }
  }

  // Return the decoded string
  return decodedStr;
}

// Example usage:
let upp = "Caesar's Cipher";

const encodedString = upp.toUpperCase();
const decodedString = rot13(encodedString);
console.log(decodedString); // Outputs "THE QUICK BROWN FOX JUMPS OVER THE LAYR DOG."


const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line

 
	// Loop through each character in the input string
  for (let i = 0; i < encodedString.length; i++) {
    const char = encodedString[i];

    // Check if the character is an uppercase letter (A-Z)
    if (/[A-Z]/.test(char)) {
      // Get the ASCII code of the character
      let charCode = encodedString.charCodeAt(i);

      // Determine if the character is in the first half of the alphabet (A-M) or the second half (N-Z)
      const isFirstHalf = charCode >= 65 && charCode <= 77;
      const isSecondHalf = charCode >= 78 && charCode <= 90;

      if (isFirstHalf || isSecondHalf) {
        // Apply the ROT13 transformation by adding or subtracting 13 from the character's ASCII code
        charCode += isFirstHalf ? 13 : -13;
      }

      // Convert the new ASCII code back to a character and add it to the decoded string
      decodedString += String.fromCharCode(charCode);
    } else {
      // If the character is not an uppercase letter, simply add it to the decoded string
      decodedString += char;
    }
  }

  return  decodedArr=decodedString;
	
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
