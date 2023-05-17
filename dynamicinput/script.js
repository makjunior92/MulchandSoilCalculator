$( document ).ready(function() {
    addInput();
});

const addbtn = document.querySelector(".add");
const input = document.querySelector(".inp-group");

var count=1;

function removeInput(){
   // alert('event triggered');
    var areaSize = getAreaElementsNewSize();
    //alert(areaSize);
    if(areaSize == 2){
    }else{
        this.parentElement.remove();
    }
    hideShow(1);
}

function getAreaElementsNewSize(){
    let lengthElements = document.getElementsByName("lengthInput");
    return (lengthElements.length+1);
}

function addInput(){

    var areaSize = getAreaElementsNewSize();
    if(areaSize > 10){
        return;
    }
    const label = document.createElement("label");
    label.type = "label";
    label.className = "area"
    label.id = "area"+count;
    label.innerHTML = "Area"+areaSize; 
    label.style.marginTop = "12px";
    const length = document.createElement("input");
    length.label = "Length";
    length.name = "lengthInput";
    length.id = "lengthInput"+count;
    length.type ="number";
    length.placeholder = "Feet";
    length.style.height = "60px";
    
    length.setAttribute('onkeyup', 'customValidation("lengthInput")');
    
    const width = document.createElement("input");
    width.label = "Width";
    width.name = "widthInput"
    width.id = "widthInput"+count;
    width.type = "number";
    width.placeholder = "Feet";
    width.style.height = "60px";
    width.className = "widthClass";
    //width.oninput="oninput_Event()";
    //width.setAttribute('oninput',"oninput_Event(this.value);");
    //width.setAttribute('oninput',"this.value = this.value.replace(/[^0-9\-]+/g, '').replace(/(\..*)\./g, '$1');"); 
    width.setAttribute('onkeyup', 'customValidation("widthInput")');

    const rowAreaCalc = document.createElement("label");
    rowAreaCalc.type = "label";
    rowAreaCalc.className = "rowAreaCalc";
    rowAreaCalc.id = "rowAreaCalc"+count;
    rowAreaCalc.innerHTML = "0 Sq Ft";
    rowAreaCalc.style.background = "rgb(224, 220, 220)";
    rowAreaCalc.style.width = "200px";
    rowAreaCalc.style.height = "60px";
    rowAreaCalc.style.textAlign = "center";
    rowAreaCalc.style.paddingTop = "12px";
    
    const btn = document.createElement("a");
    btn.className = "delete";
    btn.innerHTML = "&times";
    btn.style.paddingTop = "12px";
    btn.style.height = "60px";
    btn.style.width = "60px";
    btn.style.padding = "12px";
    btn.style.textAlign = "center";
    
    btn.addEventListener("click", removeInput);

    const flex = document.createElement("div");
    flex.className = "flex";
    
    input.appendChild(flex);
    flex.appendChild(label);
    flex.appendChild(length);
    flex.appendChild(width);
    flex.appendChild(rowAreaCalc);
    flex.appendChild(btn);

    count++;
}

function customValidationWithAreaSummaryEvent(val){
    setTotalAreaSummaryAcres(val,"calcArea");
}
function setTotalAreaSummaryAcres(input,id){
    //  alert('input '+input);
    $('#'+id).val($('#'+id).val().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0'));
    if($('#'+id).val() == ''){
        document.getElementById('summary').innerHTML = 0;
    }else{
        document.getElementById('summary').innerHTML = input;
    }
}

function customValidation(val){
    let lengthElements = document.getElementsByName(val);
    for (let i = 0; i < lengthElements.length; i++) {
        //alert(lengthElements[i].id+" : "+lengthElements[i].value);
        $('#'+lengthElements[i].id).val($('#'+lengthElements[i].id).val().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0'));
    }
    hideShow(1);
}

addbtn.addEventListener("click", addInput);
input.addEventListener("keyup", hideShow(1));