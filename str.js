/* string jar
*  defines constant string literals for app
*  like strings.xml in android...
*
*  usage example:
*       str.myString() */

stringOrDie = function (key) {
    // helper function for checking looked up string
    theStr = strings[key];
    if (typeof theStr === 'undefined') {
        throw Error('string constant not defined:', key);
    } else {
        return theStr;
    }
}

// this is generated using contents of 'jar'
str = {}
for (key in strings){
    str[key] = function(){
        return stringOrDie(key)
    }
}

module.exports = str;
