<?php

/**
 * Class CodeWars_Kyu6_PHP
 * A class that contains various CodeWars kyu 6 PHP challenges.
 */
class CodeWars_Kyu6_PHP {

    /**
     * Encrypts a message by encoding each word based on a specific pattern.
     *
     * @param string $message The input message to be encrypted.
     * @return string The encrypted message.
     * @link https://www.codewars.com/kata/5848565e273af816fb000449
     */
    public static function encryptThis($message) {
        $words = explode(" ", $message);
        $encryptedWords = [];

        foreach ($words as $word) {
            if (strlen($word) < 3) {
                $encryptedWord = ord($word[0]) . substr($word, 1);
            } else {
                $encryptedWord = ord($word[0]) . $word[strlen($word) - 1] . substr($word, 2, -1) . $word[1];
            }
            $encryptedWords[] = $encryptedWord;
        }

        $encryptedMessage = implode(" ", $encryptedWords);
        return $encryptedMessage;
    }

    /**
     * Checks if the given array is an "onion array."
     *
     * An onion array is an array in which the sum of the first and last elements is less than or equal to 10.
     *
     * @param array $a The input array to be checked.
     * @return bool Returns true if it's an onion array, otherwise false.
     * @link https://www.codewars.com/kata/59b2883c5e2308b54d000013/train/php
     */
    public static function isOnionArray(array $a): bool {
        if (count($a) == 1 || count($a) == 0) return true;

        for ($j = 0, $k = count($a) -1; $j < $k; $j++, $k--) {
            if ($j + $k == count($a) -1) {
                if ($a[$j] + $a[$k] > 10) {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Finds the missing letter in an array of consecutive letters.
     *
     * @param array $array The input array of consecutive letters.
     * @return string The missing letter.
     * @link https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/php
     */
    public static function findMissingLetter(array $array): string {
        $result = range(current($array), end($array));
        return implode("", array_diff($result, $array));
    }
}

?>
