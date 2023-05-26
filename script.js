function clearAll() {
  const memeContainer = document.querySelector(".meme-contenet");
  memeContainer.innerHTML = "";
  const jokeContainer = document.querySelector(".joke-contenet");
  jokeContainer.innerHTML = "";
  const quoteContainer = document.querySelector(".quote-contenet");
  quoteContainer.innerHTML = "";
}
function showQuote() {
  clearAll();
  const quote = getRandomData("quotes");
  const quoteContainer = document.querySelector(".quote-contenet");
  const newQuote = document.createElement("p");
  const quoteText = quote.quote;
  const quoteAuthor = quote["author"];
  // console.log(quoteText);
  // console.log(quoteAuthor);
  const newAutor = document.createElement("p");
  newQuote.textContent = quoteText;
  newAutor.textContent = quoteAuthor;

  quoteContainer.appendChild(newQuote);
  quoteContainer.appendChild(newAutor);
}

function showRiddle() {
  clearAll();
  const riddle = getRandomData("riddles");
  const riddleContainer = document.querySelector(".riddle-contenet");
  const newRiddle = document.createElement("p");
  const riddleText = riddle.question;
  const riddleAnswer = riddle.answer;
  const newAnswer = document.createElement("p");
  newAnswer.setAttribute('id','riddle-answer');
  newAnswer.hidden = true;
  newAnswer.textContent=riddleAnswer;
  newRiddle.textContent = riddleText;
  riddleContainer.appendChild(newRiddle);
     riddleContainer.appendChild(newAnswer);
  
// console.log(quoteText);
  // console.log(quoteAuthor);
} 
function showAnswer(){
  const newAnswer = document.querySelector('#riddle-answer');
    newAnswer.hidden = false ;
}

function showMeme() {
  clearAll();
  const memeUrl = getRandomData("memes");
  const memeContainer = document.querySelector(".meme-contenet");
  const newMeme = document.createElement("img");
  newMeme.setAttribute("src", memeUrl);
  memeContainer.appendChild(newMeme);
  console.log(memeContainer);
}

function showJoke() {
  clearAll();
  const joke = getRandomData("jokes");
  const jokeContainer = document.querySelector(".joke-contenet");
  const newJoke = document.createElement("p");
  newJoke.textContent = joke;
  jokeContainer.appendChild(newJoke);
  console.log(jokeContainer);
}

const memes = [
  "https://cdn.7days.ru/pic/5f7/978460/1423345/86.jpg",
  "https://bk55.ru/fileadmin/bkinform/bk_info_166738_big_1586777271.jpg",
  "https://s0.rbk.ru/v6_top_pics/resized/768xH/media/img/5/42/756709329584425.webp"
];
const jokes = [
  "Как называется порода собак,которая любит пиво? Пивчарка",
  "Чужого нам не надо, но своё мы возьмём, чьё бы оно ни было.",
  "Гена стрижет Чебурашку и спрашивает Чебурашка тебе уши надо Надо?"
];
const quotes = [
  { quote: "Нет человека нет проблем", author: "Чак Норрис" },
  { quote: "В Росси 2 проблемы дороги и дураки", author: "Народная мудрость" },
  { quote: "Поехали", author: "Ю.А.Гагарин" }
];
const riddles = [
  { question: "Что находится в центре Торонто?", answer: " Буква «о»." },
  {
    question: "Что всегда увеличивается и никогда не уменьшается?",
    answer: "Возраст"
  },
  {
    question: "Что может заполнить комнату, но не занимает места?",
    answer: "Свет"
  }
];
const data = {
  memes,
  jokes,
  quotes,
  riddles
};
function rn_num(len) {
  return Math.floor(Math.random() * len);
}
function getRandomData(type) {
  return data[type][rn_num(data[type].length)];
}
// showMeme();
// console.log(getRandomData('jokes'));
