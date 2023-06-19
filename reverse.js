function spinWords(string) {
  const words = string.split(" ");
  let array = []
  console.log(words)
  words.forEach(element => {
    if (element.length >= 5) {
              let reverse = element.split("").reverse().join("");
                array.push(reverse)
                
            }
    else{
        array.push(element)
    }
   

    });
    console.log(array.join(' '))
}

spinWords("Hey fellow warriors");
//   let array = []
//   for (i=0; i < words.length; i++) {
//     if (words[i].length >= 5) {
//       let reverse = words[i].split("").reverse().join("");
//       array.push(reverse)
//     } 
//     else{
//         array.push(words)
//         console.log(array)
//     }
//    }