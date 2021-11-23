// const answers = {
//   "ALS":"筋萎縮性側索硬化症",
//   "PSP" : "進行性核上性麻痺",
//   "CK":"クレアチニンキナーゼ",
//   "HA":"溶血性貧血",
//   "PNH":"発作性夜間ヘモグロビン尿症",
//   "AIHA":"自己免疫性溶血性貧血",
//   "HL":"Hodgkinリンパ腫",
//   "PCP":"ニューモシスチス肺炎",
//   "DM":"糖尿病",
//   "AD":"アルツハイマー病 あるいは 常染色体優性遺伝",
//   "AAA":"腹部大動脈瘤",
//   "VF":"心室細動",
//   "AF":"心房細動",
//   "MS":"多発性硬化症 あるいは 僧帽弁狭窄症",
//   "AA":"再生不良性貧血",
//   "PBC":"原発性胆汁性胆管炎",
//   "COPD":"慢性閉塞性肺疾患",
//   "MM":"多発性骨髄腫",
//   "HS":"遺伝球状赤血球症",
//   "CHF":"うっ血性心不全",
//   "AIH":"自己免疫性肝炎",
//   "DTX":"ドセタキセル",
//   "NDP":"ネダプラチン",
//   "IE":"感染性心内膜炎",
//   "SAS":"睡眠時無呼吸症候群",
//   "LDA":"低吸収域",
//   "CDDP":"シスプラチン",
//   "SSS":"洞不全症候群",
//   "SM":"ストレプトマイシン",
//   "AVM":"脳動静脈奇形",
//   "CCF":"内頚動脈海綿静脈洞瘻",
//   "TTP":"血栓性血小板減少性紫斑病",
//   "HUS":"溶血性尿毒症症候群",
//   "ETEC":"毒素原性大腸菌",
//   "EHEC":"腸管出血性大腸菌",
//   "SO":"s/oの形でよくかかれる。~疑い",
//   "MDS":"骨髄異形成症候群",
//   "SLE":"全身性エリテマトーデス",
//   "APS":"抗リン脂質抗体症候群",
//   "HPS":"血球貪食症候群",
//   "AML":"急性骨髄性白血病",
//   "CML":"慢性骨髄性白血病",
//   "NAP":"好中球アルカリフォスファターゼ",
//   "IDA":"鉄芽球性貧血",
//   "KT":"体温,BTで記載する先生もいる",
//   "JIA":"若年性特発性関節炎",
//   "MN":"膜性腎症",
//   "BE":"気管支拡張症",
//   "IPF":"特発性肺線維症",
//   "MCNS":"微小変化型ネフローゼ症候群",
//   "CBD":"大脳皮質基底核変性症",
//   "DWI":"拡散強調像,プレゼンでディフュージョンという先生もいる",
//   "PPI":"プロトンポンプ阻害薬"
// };
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
