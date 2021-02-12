function hash_anagrams (x, y) {
    // creating an array which has 26 length and filled with "0" elements because as we have to 26 alphaabet letters
    let x_alph = new Array(26).fill(0); 
    let y_alph = new Array(26).fill(0);

    //first we will make intration on first string array, and through charcode method we will find the index of an alphabet. 
    //so let suppose we have "a" which will have index of 0; and for b = 1
    // and we will add the 1 plus to take the record of elemnt "a" how many time is repeated in string
    // we will do same with input string 2
     for(let i=0 ; i< x.length; i++){
         console.log(x_alph)
         x_alph[(x.charCodeAt(i) - 97)]++
        } 
    for(let i=0 ; i< y.length ; i++){ 
        console.log(x_alph)
        y_alph[(y.charCodeAt(i) - 97)]++ 
    }

    //Once we will have all the recors of repetation of input string1 and string2
    // we will calculate the differnece by using absolute method where -1 = 1
    let difference = 0;
    for(let i=0 ;i< 26 ;i++ ){
        difference += Math.abs(x_alph[i] - y_alph[i]) //from given string, a:2 a:2 = 2-2 = 0 // b : 2 b:2 = 2-2 =0 //c:1 c:2 = 1-2 = -1 = math.abs(-1) = 1// hence answer will be 1
    }
    return difference
}


var str1 = "aabbc"
var str2 = "aabbcc"
console.log( hash_anagrams(str1,str2) )