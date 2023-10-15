function submitText(){
  let initialText = document.getElementById("textToConvert");
  let resultText = document.getElementById("result");
  var text = initialText.value;
  let result = text.split('').map(function(char, index, array) {
      if (char === ' ') {
        return ' ';
      }
      return array.indexOf(char) === index ? char : '';
    })
    .join('');

  resultText.value = result;
}
