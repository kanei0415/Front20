let works = [];

function addList() {
  let workName = document.getElementById("text-basic").value;
  works.push(workName);

  let workListElement = document.createElement("div");

  workListElement.setAttribute("id", "work" + works.length);

  let checkBox = document.createElement("input");

  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", "checked" + works.length);

  workListElement.appendChild(checkBox);

  let textArea = document.createElement("span");

  textArea.setAttribute("id", "work-name" + works.length);

  textArea.appendChild(
    document.createTextNode(workName)
  );
  workListElement.appendChild(textArea);

  document.getElementById("list-table").appendChild(workListElement);
}

function selectDelete() {  
  let workList = document.getElementById("list-table").children;

  for(let i=works.length-1 ; i>=0 ; i--) {
    if(document.getElementById(`checked${i+1}`).checked) {
      works.splice(i,1);
      document.getElementById("list-table").removeChild(workList[i]);
    }
  }

  for(let i=0 ; i<workList.length ; i++) {
    tmp = workList[i].children;

    tmp[0].setAttribute("id", "checked" + (i+1));
    tmp[1].setAttribute("id", "work-name" + (i+1));
    workList[i].setAttribute("id", "work" + (i+1));
  }
}

function deleteBack() {  
  let workList = document.getElementById("list-table").children;
  document.getElementById("list-table").removeChild(workList[works.length-1]);

  works.pop();
}

function clearList() {  
  let workList = document.getElementById("list-table").children;

  for(let i=works.length-1 ; i>=0 ; i--){
    document.getElementById("list-table").removeChild(workList[i]);
  }

  works = [];
}

document.getElementById("btnAdd").addEventListener("click", addList);
document.getElementById("btnDeleteSel").addEventListener("click", selectDelete);
document.getElementById("btnDeleteLast").addEventListener("click", deleteBack);
document.getElementById("btnDeleteAll").addEventListener("click", clearList);