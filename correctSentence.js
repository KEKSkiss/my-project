/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

/*
export default function correctSentence(text) {
  // your solution goes here
  return text;
}
 */

export default function correctSentence(text) {

  // Делаем первую букву заглавной
  let result = text[0].toUpperCase() + text.slice(1);

  // Добавляем точку в конец, если её нет
  if (!result.endsWith('.')) {
    result += '.';
  }

  return result;
}





