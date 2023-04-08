export const noop = () => {};

export const passwordGenerator = ({
    len,
    spacing,
    includeUppercaseLetters,
    includeLowercaseLetters,
    includeNumbers,
    includeSymbols,
}) => {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!"$%^&*()';
    console.log(typeof spacing);
    const set =
        (includeLowercaseLetters ? lowerCaseChars : '') +
        (includeUppercaseLetters ? upperCaseChars : '') +
        (includeNumbers ? numbers : '') +
        (includeSymbols ? symbols : '');

    const blank = Array.from({ length: len + Math.floor(len / spacing) - 1 });

    return blank
        .map((_, idx) => (idx % (spacing + 1) === spacing ? '-' : set.charAt(Math.floor(Math.random() * set.length))))
        .join('');
};
