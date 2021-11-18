const answers = {
  "PSP" : "進行性核上性麻痺",
  "MS":"多発性硬化症 あるいは 僧帽弁狭窄症",
  "AA":"再生不良性貧血",
  "PBC":"原発性胆汁性胆管炎",
  "MM":"多発性骨髄腫",
  "HS":"遺伝球状赤血球症",
  "CHF":"うっ血性心不全",
  "AIH":"自己免疫性肝炎",
  "DTX":"ドセタキセル",
  "NDP":"ネダプラチン",
  "CDDP":"シスプラチン",
  "AVM":"脳動静脈奇形",
  "CCF":"内頚動脈海綿静脈洞瘻",
  "TTP":"血栓性血小板減少性紫斑病",
  "MDS":"骨髄異形成症候群",
  "SLE":"全身性エリテマトーデス",
  "APS":"抗リン脂質抗体症候群",
  "HPS":"血球貪食症候群",
  "AML":"急性骨髄性白血病",
  "CML":"慢性骨髄性白血病",
  "IDA":"鉄芽球性貧血",
  "JIA":"若年性特発性関節炎",
  "MN":"膜性腎症",
  "MCNS":"微小変化型ネフローゼ症候群",
  "CBD":"大脳皮質基底核変性症"
};

// ボタンが押されたときの動作
const searchButton = document.getElementById("search");
const searchValue = document.getElementById("abbreviation");
let answerArea = document.getElementById("result");
let answerAreaTitle = document.createElement('h2');
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
searchValue.addEventListener('keypress',(e) => {
  if(e.key == 'Enter'){
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
  }
})
