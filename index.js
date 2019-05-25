function translatePigLatin(str) {
  let vowels = /[aeiou]/g;
  let vowelIndex = str.search(vowels)
  let firstHalf = "";
  if(vowelIndex !== 0){
    let firstHalf = (vowelIndex > 0) ? str.substring(0,vowelIndex) : '';
    return str.substring(vowelIndex) + firstHalf + "ay";
  }
  else if(vowelIndex === 0){
    return str + "way"
  }
}


translatePigLatin("consonant");
