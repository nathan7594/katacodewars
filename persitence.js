function persistence(num) {
    if (num < 10) {
      return 0;
    }
    let count = 0;
    while (num >= 10) {
      let newdecoup = decouper(num);
      num = multiplier(newdecoup);
      count++;
    }
    return count
    }
persistence(999);
  
   function decouper(num) {
    let tableauvide = [];
    let chainedecaractere = num.toString();
    let caractere = chainedecaractere.split("");
    for (let i = 0; i < caractere.length; i++) {
      tableauvide.push(parseInt(caractere[i]));
    }
    return tableauvide;
  }
  
  function multiplier(tableaudechiffre) {
    let produit = tableaudechiffre[0];
    for (let i = 1; i < tableaudechiffre.length; i++) {
      produit = produit * tableaudechiffre[i];
    }
  
    return produit;
  }
  // Ennoncé : 
  // Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
  
  // For example (Input --> Output):
  
  // 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
  // 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
  // 4 --> 0 (because 4 is already a one-digit number)
