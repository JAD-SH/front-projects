const AllLSToDos = {...localStorage};
let inputToDo = $('#inputToDo'),
 addBtn = $('#addToDoBtn'),
 allToDos = $('#allToDosCount'),
 allComplatedToDos = $('#allComplatedToDosCount'),
 toDosContainer = $('.toDo-container');

$( window ).ready(() => {
  if(Object.keys(AllLSToDos).length > 0){
    $('#noToDoAlret').fadeOut();
  }
  inputToDo.focus();
  toDosCounter();
  loadAllToDosFromLS();
  OnClickRemoveBtns();
  OnClickComplateBtns()
});


function toDoLayout(toDo) {

    //########### start create toDo content
    toDoImport = $(document.createElement("div"));
    toDoImport.addClass("impotantble bg-"+toDo.importantable);

    toDoDate = $(document.createElement("strong"));
    toDoDate.addClass("d-block text-gray-dark").append(document.createTextNode(toDo.date));
    
    toDoNote = document.createTextNode(toDo.note);
    
    toDoNoteContent = $(document.createElement("p"));
    toDoNoteContent.addClass("pb-3 mb-0 small lh-sm border-bottom").append(toDoDate, toDoNote);
    
    
    toDoNoteContainer = $(document.createElement("div"));
    toDoNoteContainer.addClass("d-flex").append(toDoImport, toDoNoteContent);
    
    //########### end create toDo content
    
    //########### start create comp, remove btns
              //complated button
    compBtn = $(document.createElement("button"));
    if(toDo.complated){
      compBtn.addClass("btn btn-success");
    }else{
      compBtn.addClass("btn btn-outline-success complated-btn")
      .attr("data-bs-toggle","modal")
      .attr("data-bs-target","#complatedToDoModel")
      .attr("data-id",toDo.date);
    }
    compBtn.append(document.createTextNode("تمت"));
              //delete button
    removeBtn = $(document.createElement("button")).
    addClass("btn btn-outline-danger remove-btn")
    .attr("data-bs-toggle","modal")
    .attr("data-bs-target","#removeToDoModel")
    .attr("data-id",toDo.date).append(document.createTextNode("حذف"));

    groupBtn = $(document.createElement("div")).addClass("btn-group","d-flex").attr("role","group").append(compBtn, removeBtn);
    //########### end create comp, remove btns
    
    //########### start create toDo container
    toDoContainer = $(document.createElement("div"))
    .addClass("toDo-item text-body-secondary")
    .attr("id",toDo.date).append(toDoNoteContainer, groupBtn);
    if(toDo.complated){
      toDoContainer.addClass('opacity-50');
    }
    
    //########### end create toDo container
    toDosContainer.append(toDoContainer);
}


addBtn.on('click',() => {
  let importantable = $('input[name=importantable]:checked');
  if(inputToDo.val() != "" && importantable.val() != undefined){
    let D = new Date;
    let T = D.getFullYear() + "-" + D.getMonth() + "-" + D.getDate() + "-" + D.getHours() + "-" + D.getMinutes() + "-" + D.getSeconds() + "-" + D.getMilliseconds();
    let toDoObject = {note : inputToDo.val(), importantable : importantable.val(), date : T, complated : false};
    
    let localStorageToDos = {...localStorage};
    for (let todo in localStorageToDos) {
      if(JSON.parse(localStorage.getItem(todo)).note == inputToDo.val()){
        alert("هذه ال toDo موجودة مسبقاً !");
        return false;
      }
    }

    toDoLayout(toDoObject);
    localStorage.setItem(T, JSON.stringify(toDoObject));
    inputToDo.val('');
    inputToDo.focus();
    toDosCounter();
    OnClickRemoveBtns();
    OnClickComplateBtns();
    $('#noToDoAlret').fadeOut(500);
  }else alert("الرجاء ادخال مهام والمحاولة مجدداً !");
});

function loadAllToDosFromLS(){
  for (let todo in AllLSToDos) {
    toDoLayout(JSON.parse(localStorage.getItem(todo)));
  }
}


function toDosCounter(){
  let localStorageToDos = {...localStorage};
  let compCount = 0;
  allToDos.html(Object.keys(localStorageToDos).length);
  
  for (let todo in localStorageToDos) {
    if(JSON.parse(localStorage.getItem(todo)).complated){
      compCount++;
    }
  }
  allComplatedToDos.html(compCount);
}

function OnClickRemoveBtns(){
  let removeBtns = Array.from(document.querySelectorAll('.remove-btn'));
  removeBtns.forEach(btn => {
    $(btn).on('click', function(){
      $('#removeToDo').attr("data-id", $(btn).attr('data-id'));
    });
  });
}

function OnClickComplateBtns(){
  let complateBtns = Array.from(document.querySelectorAll('.complated-btn'));
  complateBtns.forEach(btn => {
    $(btn).on('click', function(){
      $('#complatedToDo').attr("data-id", $(btn).attr('data-id'));
    });
  });
}

$('#removeToDo').on("click", () => {
  let toDoId = $('#removeToDo').attr('data-id');
  localStorage.removeItem(toDoId);
  $(`#${toDoId}`).fadeOut(500);
  setTimeout(() => {
    $(`#${toDoId}`).remove();
  }, 480);
  toDosCounter();
  OnClickRemoveBtns();
  OnClickComplateBtns();
  if(Object.keys({...localStorage}).length <= 0){
    $('#noToDoAlret').fadeIn(500);
  }
});

$('#complatedToDo').on("click", () => {
  
 let toDoId = $('#complatedToDo').attr('data-id'),
 compBtn = $(`#${toDoId} .complated-btn`);
 compBtn.removeAttr("data-bs-toggle").removeAttr("data-bs-target").removeAttr("data-id").addClass("btn-success text-light").removeClass("complated-btn");
  let toDo= JSON.parse(localStorage.getItem(toDoId));
  toDo.complated = true;
  localStorage.setItem(toDoId, JSON.stringify(toDo));
  $(`#${toDoId}`).addClass('opacity-25');
  toDosCounter();
  OnClickRemoveBtns();
  OnClickComplateBtns();
});
