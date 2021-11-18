const answers = {
  "PSP" : "進行性核上性麻痺",
  "MS":"多発性硬化症,僧帽弁狭窄症",
  "AA":"再生不良性貧血",
  "MM":"多発性骨髄腫",
  "CHF":"うっ血性心不全"
};

// ボタンが押されたときの動作
const searchButton = document.getElementById("search");
const searchValue = document.getElementById("abbreviation");
let answerArea = document.getElementById("result");
let answerAreaTitle = document.createElement('h3');
let answerAreaAnswer = document.createElement('p');

console.log(typeof searchValue.value);

function processAlphabets(string){
  string = string.split("");
  for(let i=0; i < string.length;i++){
    string[i] = string[i].toUpperCase();
  }
  return string.join("")
}
//valueには要素のvalue(アルファベットの文字列)に入れる
// function confirmCapital(searchValue){
//   value = searchValue.value.split("");
  
// }

// if(searchValue.value )

searchButton.addEventListener('click',() => {
  let text = processAlphabets(searchValue.value);
  console.log(text);
  for(const prop in answers ){
    if(text == prop){
      answerAreaTitle.textContent = "検索結果";
      answerAreaAnswer.textContent = answers[prop];
      answerArea.appendChild(answerAreaTitle);
      answerArea.appendChild(answerAreaAnswer);
      return;
    }else{
      answerAreaTitle.textContent = "検索結果";
      answerAreaAnswer.textContent = "表示結果はありません";
      answerArea.appendChild(answerAreaTitle);
      answerArea.appendChild(answerAreaAnswer);
    }
  }
})
