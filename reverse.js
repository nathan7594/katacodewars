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
// Enoncé : Écrivez une fonction qui prend une chaîne d'un ou plusieurs mots et renvoie la même chaîne, 
// mais avec les mots de cinq lettres ou plus inversés (tout comme le nom de ce Kata). 
// Les chaînes transmises seront composées uniquement de lettres et d'espaces. 
// Les espaces seront inclus uniquement lorsque plus d'un mot est présent.
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"