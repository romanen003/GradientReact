 export function isValid (color) {
     const re = /^[a-f0-9]{3,6}$/i;

     return color.length === 3 || color.length === 6  ? re.test(color) : false ;

}