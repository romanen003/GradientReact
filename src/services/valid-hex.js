 export function isValid (color) {
     const re = /(?:#)[0-9a-f]{8}|(?:#)[0-9a-f]{6}|(?:#)[0-9a-f]{4}|(?:#)[0-9a-f]{3}/ig;

     return re.test(color);
}