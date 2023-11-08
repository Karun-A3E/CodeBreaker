import re

class Codewars_ky6_codingChallenges:

    @staticmethod
    def encrypt_this(text):
        """
        Challenge: Encrypt This (Link: https://www.codewars.com/kata/5848565e273af816fb000449)
        Description: Given a string of words, encrypt each word by replacing the first character with its ASCII code,
        and swap the second and last characters if the word has more than two characters.
        """
        result = []
        for word in text.split():
            word = list(word)
            word[0] = str(ord(word[0]))

            if len(word) > 2:
                word[1], word[-1] = word[-1], word[1]
            result.append(''.join(word))
        return ' '.join(result)

    class Automaton:
        def __init__(self):
            self.states = []

        def read_commands(self, li):
            """
            Challenge: Design a Simple Automaton (Finite State Machine) (Link: https://www.codewars.com/kata/5268acac0d3f019add000203)
            Description: Implement a finite state machine with three states (1, 2, 3) and read a sequence of commands
            (0 or 1). Return True if the sequence of commands leads to state 1 at the end; otherwise, return False.
            """
            states = ['1', '2', '3']
            resultant = 0
            for i in range(0, len(li)):
                resultant_inLoop = resultant
                if resultant_inLoop == 0:
                    resultant += 1 if li[i] == '1' else 0
                elif resultant_inLoop == 1:
                    resultant += 1 if li[i] == '0' else 0
                elif resultant_inLoop == 2:
                    resultant -= 1
            return False if resultant != 1 else True

    @staticmethod
    def is_valid_IP(strng):
        """
        Challenge: IP Validation (Link: https://www.codewars.com/kata/515decfd9dcfc23bb6000006)
        Description: Validate whether a given string is a valid IP address (IPv4). Return True if it's valid, False otherwise.
        """
        return bool(re.match('(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}\Z', strng))

    @staticmethod
    def string_transformer(stri):
        """
        Challenge: String Transformer (Link: https://www.codewars.com/kata/5878520d52628a092f0002d0)
        Description: Transform a given string by reversing the order of words and changing the case of letters within each word.
        """
        return ' '.join([''.join([letter.lower() if letter.upper() == letter else letter.upper() for letter in i]) for i in stri.split(' ')][::-1])

    @staticmethod
    def est_subsets(arr):
        """
        Challenge: Estimating Amounts of Subsets (Link: https://www.codewars.com/kata/584703d76f6cf6ffc6000275)
        Description: Calculate the number of non-empty subsets of an array and return 2^n - 1, where n is the number of unique elements in the array.
        """
        return 2**len(set(arr)) - 1

    @staticmethod
    def pyramid_height(n):
        """
        Challenge: Calculate Pyramid Height (Link: https://www.codewars.com/kata/56968ce7753513604b000055)
        Description: Calculate the height of a pyramid that can be built using n blocks, where each level has 1, 4, 9, ... blocks.
        """
        count = 0
        i = 1
        while n > 0:
            n = n - (i**2)
            i += 1
            if n >= 0:
                count += 1
        return count

    @staticmethod
    def solution(s):
        """
        Challenge: Roman Numerals Decoder (Link: https://www.codewars.com/kata/51b6249c4612257ac0000005)
        Description: Convert a Roman numeral string to an integer.
        """
        roman_dict = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        result = 0
        prev_value = 0
        for c in s[::-1]:  # Start from the rightmost character
            value = roman_dict[c]

            if value < prev_value:
                result -= value
            else:
                result += value

            prev_value = value

        return result

