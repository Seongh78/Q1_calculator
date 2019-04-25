// input에 숫자를 입력하고 + 버튼을 클릭하면 결과값에 입력한 숫자 만큼 더해지고 input의 값은 없어진다.
// input에 숫자를 입력하고 - 버튼을 클릭하면 결과값에 입력한 숫자 만큼 빼지고 input의 값은 없어진다.
// input에 유효하지 않은 숫자를 입력하고 +, - 버튼을 클릭하면 동작은 무되되고 input의 값은 없어진다.
// undo를 클릭하면 이전 값으로 돌아간다.
// redo를 클릭하면 이후 값으로 되돌린다.
// undo와 redo는 동작이 가능할때만 활성화 상태가 된다.

var result = document.getElementById('value');

var undoButton = document.getElementById('undoButton'),
  addButton = document.getElementById('addButton'),
  subButton = document.getElementById('subButton'),
  redoButton = document.getElementById('redoButton'),
  inputValue = document.getElementById('inputbox');

var calList = new Array();
var cnt = -1;
// =====  ===== //
function onload() {
  undoButton.onclick = handleClick;
  addButton.onclick = handleClick;
  subButton.onclick = handleClick;
  redoButton.onclick = handleClick;
}

// ===== handlClick ===== //
function handleClick(event) {

  //계산값 변수 설정
  var calFir = Number(result.innerHTML);
  var calSec = Number(inputValue.value);

  switch (event.target.id) {
    // === Undo === //
    case 'undoButton':

      //바라보는 위치 변경
      cnt--;

      break;

    // === Add === //
    case 'addButton':
    
      //바라보는 위치 변경
      cnt++;

      //배열에 해당 값 저장
      calList[cnt] = calFir + calSec;

      break;

    // === Sub === //
    case 'subButton':

      //바라보는 위치 변경
      cnt++;

      //배열에 해당 값 저장
      calList[cnt] = calFir - calSec;

      break;

    // === Redo === //
    case 'redoButton':

      //바라보는 위치 변경
      cnt++;

      break;

    default:
      return;
  } // switch

  //결과값 세팅
  result.innerHTML = calList[cnt];
  if(cnt == -1){
    result.innerHTML = 0;
  }

  //입력값 초기화
  inputValue.value = '';
  inputValue.focus();

  //redo, undo 버튼 활성화 유무 체크
  if(cnt == calList.length-1){
    redoButton.disabled = 'disabled';
  }else{
    redoButton.disabled = false;
  }
  if(cnt == -1){
    undoButton.disabled = 'disabled';
  }else{
    undoButton.disabled = false
  }

} // func
