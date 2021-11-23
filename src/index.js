import { answers } from "./data.js";
// ボタンが押されたときの動作
const searchButton = document.getElementById("search");
const searchValue = document.getElementById("abbreviation");
let answerArea = document.getElementById("result");
let answerAreaTitle = document.createElement('h2');
let answerAreaAnswer = document.createElement('p');

console.log(typeof searchValue.value);

function checkIsAlphabets(string){
  string = string.split("");
  for(let i=0;i < string.length;i++){
    if(string[i].charCodeAt(0)<64 || string[i].charCodeAt(0)>123){
      return true;
    }
  }
}

function processAlphabets(string){
  string = string.split("");
  for(let i=0; i < string.length;i++){
    string[i] = string[i].toUpperCase();
  }
  return string.join("")
}

searchButton.addEventListener('click',() => {
  if(checkIsAlphabets(searchValue.value)){
    confirm("半角英字のみで入力してください");
    return;
  }
  let text = processAlphabets(searchValue.value);
  console.log(text);
  for(const prop in answers ){
    if(text == prop){
      answerAreaTitle.textContent = searchValue.value+"の検索結果";
      answerAreaAnswer.textContent = answers[prop];
      answerArea.appendChild(answerAreaTitle);
      answerArea.appendChild(answerAreaAnswer);
      return;
    }else{
      answerAreaTitle.textContent = searchValue.value+"の検索結果";
      answerAreaAnswer.textContent = "表示結果はありません";
      answerArea.appendChild(answerAreaTitle);
      answerArea.appendChild(answerAreaAnswer);
    }
  }
})
searchValue.addEventListener('keypress',(e) => {
  if(e.key == 'Enter'){
    if(checkIsAlphabets(searchValue.value)){
      confirm("半角英字のみで入力してください");
      return;
    }
    let text = processAlphabets(searchValue.value);
    console.log(text);
    for(const prop in answers ){
      if(text == prop){
        answerAreaTitle.textContent = searchValue.value+"の検索結果";
        answerAreaAnswer.textContent = answers[prop];
        answerArea.appendChild(answerAreaTitle);
        answerArea.appendChild(answerAreaAnswer);
        return;
      }else{
        answerAreaTitle.textContent = searchValue.value+"の検索結果";
        answerAreaAnswer.textContent = "表示結果はありません";
        answerArea.appendChild(answerAreaTitle);
        answerArea.appendChild(answerAreaAnswer);
      }
    }
  }
})
