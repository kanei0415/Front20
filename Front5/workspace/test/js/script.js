const PROBLEMS = [
  {problem : "평소에는 아무렇지도 않던 일들이 귀찮았다."},
  {problem : "입맛도 없었고, 먹고 싶지도 않았다."},
  {problem : "가족이나 친구가 도와줘도 우울한 기분이 나아지지 않았다."},
  {problem : "나도 다른 사람들만큼 능력 있다고 느꼈다."},
  {problem : "어떤 일을 하든 집중하기 힘들었다."},
  {problem : "우울했다."},
  {problem : "하는 일마다 힘들다고 느껴졌다."},
  {problem : "앞일이 암담하게 느껴졋다."},
  {problem : "내 인생은 실패작이라고 느꼈다."},
  {problem : "두려웠다."},
  {problem : "잠을 설쳤다, 잠이 안 왔다."},
  {problem : "비교적 잘 지냈다."},
  {problem : "평소보다 말을 적게 했다, 말수가 줄었다"},
  {problem : "세상에 홀로 있는 것처럼 외로웠다."},
  {problem : "사람들이 나를 차갑게 대하는 것 같았다."},
  {problem : "큰 불만 없이 생활했다."},
  {problem : "갑자기 울음이 나왔다."},
  {problem : "슬펐다."},
  {problem : "사람들이 나를 싫어하는 것 같았다."},
  {problem : "도무지 뭘 시작할 기운이 안 났다."},
]

$(function () {  
  $("#end-btn").hide();
})

function initRadio() {  
  for(let i=0 ; i<PROBLEMS.length ; i++) {
    document.getElementById("radio-area").appendChild(
      document.createTextNode(PROBLEMS[i].problem)
    );

    for(let j=0 ; j<4 ; j++) {
      let radioButton = document.createElement('input');

      radioButton.setAttribute('type', 'radio');
      radioButton.setAttribute('name', 'btn-num' + i);
      radioButton.setAttribute('value', j);
      
      document.getElementById("radio-area").appendChild(radioButton);
    }

    document.getElementById("radio-area").appendChild(
      document.createElement('hr')
    );
  }

  $("#start-btn").hide();
  $("#end-btn").show();
}

function end() {  
  let result = 0;
  let count = 0;

  let tmpBtns;
  for(let i=0 ; i<PROBLEMS.length ; i++) {
    tmpRadio = $(`input[name = btn-num${i}]`);

    if(tmpRadio.is(":checked")) {
      result += parseInt($(`input[name = btn-num${i}]:checked`).val());
      count++;
    } 
  }

  if(count == PROBLEMS.length) {
    alert("Your score is " + result);
  } else {
    alert("Please Check All of Questions!");
  }
}