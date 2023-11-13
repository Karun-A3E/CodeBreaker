class CodingChallenges {
  /**
   * Challenge 1: Encrypt This!
   * Link : https://www.codewars.com/kata/5848565e273af816fb000449/javascript
   *
   * Description:
   * Given a string, this function encrypts it by replacing the first letter
   * of each word with its character code and rearranging the rest of the letters.
   *
   * @param {string} message - The input string to be encrypted.
   * @returns {string} - The encrypted string.
   */
  static encryptThis(message) {
    return message
      .split(" ")
      .map((word) => {
        if (word.length < 3) {
          return word.charCodeAt(0).toString() + word.slice(1);
        } else {
          return `${word.charCodeAt(0)}${word.slice(-1)}${word.slice(2, -1)}${word[1]}`;
        }
      })
      .join(" ");
  }

  /**
   * Challenge 2: Make the Deadfish Swim
   * Link : https://www.codewars.com/kata/51e0007c1f9378fa810002a9
   * Description:
   * This function interprets a string of commands ('i', 'd', 's', 'o')
   * to manipulate a value and returns an array of results based on the commands.
   *
   * @param {string} data - The input string of commands.
   * @returns {number[]} - An array of results.
   */
  static parse(data) {
    let beginning_value = 0;
    const return_arr = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i] === 'i') {
        beginning_value += 1;
      } else if (data[i] === 'd') {
        beginning_value -= 1;
      } else if (data[i] === 's') {
        beginning_value **= 2;
      } else if (data[i] === 'o') {
        return_arr.push(beginning_value);
      }
    }

    return return_arr;
  }

  /**
   * Challenge 3: Pyramid Array
   * Link : https://www.codewars.com/kata/515f51d438015969f7000013
   * Description:
   * This function generates a pyramid-shaped array of 1s.
   *
   * @param {number} n - The number of rows in the pyramid.
   * @returns {number[][]} - The pyramid array.
   */
  static pyramid(n) {
    const pyramid_array = [];

    for (let i = 0; i < n; i++) {
      const temp = [];
      for (let x = 0; x <= i; x++) {
        temp.push(1);
      }
      pyramid_array.push(temp);
    }

    return pyramid_array;
  }

  /**
   * Challenge 4: Create Phone Number
   * Link : https://www.codewars.com/kata/525f50e3b73515a6db000b83
   * Description:
   * Given an array of 10 digits, this function formats it into a phone number.
   *
   * @param {number[]} arr - An array of 10 digits.
   * @returns {string} - The formatted phone number.
   */
  static createPhoneNumber(arr) {
    const phone_arr = arr;
    const phone_arr_sub = [];
    phone_arr_sub.push(`(` + phone_arr.slice(0, 3).join('') + `)`);
    phone_arr_sub.push(` `);
    phone_arr_sub.push(phone_arr.slice(3, 6).join('') + `-` + phone_arr.slice(6, 10).join(''));
    return phone_arr_sub.join('');
  }

  /**
   * Challenge 5: Calculate Pyramid Height
   * Link : https://www.codewars.com/kata/56968ce7753513604b000055
   * Description:
   * This function calculates the height of a pyramid given the number of blocks used.
   *
   * @param {number} n - The total number of blocks used in the pyramid.
   * @returns {number} - The height of the pyramid.
   */
  static calculatePyramidHeight(n) {
    let count = 0;
    for (let i = 1; n > 0; i++) {
      n -= i ** 2;
      if (n >= 0) {
        count++;
      }
    }
    return count;
  }

  /**
   * Challenge 6: Detect Pangram
   * Link : https://www.codewars.com/kata/545cedaa9943f7fe7b000048
   * Description:
   * This function checks if a given string is a pangram (contains all letters of the alphabet).
   *
   * @param {string} string - The input string to be checked.
   * @returns {boolean} - `true` if it's a pangram, `false` otherwise.
   */
  static isPangram(string) {
    const regex = /([a-z])(?!.*\1)/gi;
    return (string.match(regex) || []).length === 26;
  }


  /**
 * Challenge 7: Roman Numerals Decoder (Default Solution)
 * Link : https://www.codewars.com/kata/51b6249c4612257ac0000005
 * Description:
 * This function decodes a Roman numeral string and converts it into an integer.
 *
 * @param {string} roman - The Roman numeral string to be decoded.
 * @returns {number} - The decoded integer.
 */
  static solution_Roman_numerals_default(roman) {
    const roman_dict = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };

    let result = 0;
    let prev_value = 0;
    const reversed = roman.split('').reverse().join('');

    for (const c of reversed) {
      let value = roman_dict[c];
      if (value < prev_value) {
        result -= value;
      } else {
        result += value;
      }
      prev_value = value;
    }

    return result;
  }

  /**
   * Challenge 7: Roman Numerals Decoder (Alternative Solution)
   * Link : https://www.codewars.com/kata/51b6249c4612257ac0000005
   * Description:
   * This function provides an alternative solution to decode Roman numerals.
   *
   * @param {string} roman - The Roman numeral string to be decoded.
   * @returns {number} - The decoded integer.
   */
  static solution_Roman_numerals_alternate(roman) {
    const roman_dict = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };

    const reversed = roman.split('').reverse();

    return reversed.reduce((result, c, index) => {
      const value = roman_dict[c];
      const prev_value = roman_dict[reversed[index - 1]];
      return result + (value < prev_value ? -value : value);
    }, 0);
  }
  /**
   * Chellenge 8 : Tim's Fruit Shop Challenge
   * Link: https://www.codewars.com/kata/652643925c042100247fffc6/
   *
   * Description:
   * This function optimizes the packaging of fruit orders. Fruits are packed
   * into bags, boxes, and pallets based on the number of units. Each 10 units
   * go into a box ({a}), and every 5 boxes are stacked into a pallet ([a]).
   * Remaining units are put into a bag, enclosed by ().
   *
   * @param {string[]} orders - An array of fruit orders to be optimized.
   * @returns {string[]} - An array of optimized fruit packaging.
   */
  static fruitPack(orders) {
    return orders.map(order => {
      let order_sep = {};
      let result = { bag: '', box: '', pallet: '' };
      let longestLength = 0;

      order.replace(/(\d+)([a-z])/g, (_, number, alphabet) => (order_sep[alphabet] = (order_sep[alphabet] || 0) + +number));

      Object.keys(order_sep).forEach(key => {
        const value = order_sep[key];
        let string = '';

        const groupsOf50 = Math.floor(value / 50);
        if (groupsOf50 > 0) {
          string += `[${key}]`.repeat(groupsOf50);
          result.pallet += string;
        }

        const remainder = value % 50;
        if (remainder >= 10) {
          const groupsOf10 = Math.floor(remainder / 10);
          string = `{${key}}`.repeat(groupsOf10);
          result.box += string;
        }

        const remainingValue = remainder % 10;
        if (remainingValue > 0) {
          string = '(' + `${key}`.repeat(remainingValue) + ')';
          result.bag += string;
        }
      });

      Object.keys(result).forEach(key => {
        if (result[key].length > longestLength) {
          longestLength = result[key].length;
        }
      });

      const paddedResult = Object.keys(result).map(key => {
        return result[key].padStart(longestLength, '-');
      });

      return paddedResult;
    });
  }
}