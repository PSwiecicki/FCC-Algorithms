function rot13(str) 
{
    let newStr = "";
    for(let i = 0; i < str.length; i++)
    {
        let charCode = str.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90)
        {
            let newCharCode = charCode + 13;
            if(newCharCode > 90)
                newCharCode = newCharCode - 26;
            newStr += String.fromCharCode(newCharCode);
        }
        else
        newStr += str.charAt(i);
    }
    return newStr;
}
  
rot13("SERR PBQR PNZC");