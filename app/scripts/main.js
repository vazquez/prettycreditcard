function moveNextField(current, nextFieldID){
  if(current.value.length >= current.maxLength){
    document.getElementById(nextFieldID).focus();
  }
}

