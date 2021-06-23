function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^0-9a-z]/g, "");
  for(let i = 0; i < str.length/2; i++)
    if(str.charAt(i) != str.charAt(str.length-1-i))
      return false;
  return true;
}

palindrome("eye");