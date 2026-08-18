/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let map = {};
    map[s[0]] = 1
    let i = j = 0;
    let max = 0;
    while (j < s.length) {
        if (isWindowValid(map, k)) {
            max = Math.max(max, j - i + 1);
            ++j;
            map[s[j]] = !map[s[j]] ? 1 : ++map[s[j]];
        } else {
            --map[s[i]]
            ++i;
        }
    }
    return max;
};

var isWindowValid = function (map, k) {
    let totalCount = 0;
    let maxCount = 0;
    for (let i = 0; i < 26; i++) {
        let char = String.fromCharCode(i + 65)
        if (map[char]) {
            totalCount = totalCount + map[char]
            maxCount = Math.max(maxCount, map[char])
        }
    }
    return (totalCount - maxCount <= k);
}