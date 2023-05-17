$( document ).ready(function() {
//    console.log( "ready!" );
    hideOrShowSummaryArea(1);
    hideShow(1);
    areaCalculation(0,0);
    setUnitOfMeasurements("Sq Ft");
});
function calculate() 
{
    hideOrShowSummaryArea(2);
    var volumeResult = getCubicFeetResult();
    var prodcutEstimate = Number(volumeResult / 20.83).toFixed(0);

    document.getElementById('summaryResultCubic').innerHTML = volumeResult;
    document.getElementById('summaryResultCubicTon').innerText = prodcutEstimate;
}

function getCubicChangeResult(type){
    if(type =='cf'){
        getCubicFeetResult();
    }else if(type == 'cy'){
        convertCubicFeetToYards();
    }else{
        convertCubicFeetToMeters();
    }
}



function getCubicFeetResult(){
    var areaSummary = document.getElementById('summary').innerText;
    //var measurementUnit = $('#measurementsValue').val();
    //alert(measurementUnit);
    var measurementUnit = document.getElementById('measurementsValue').innerHTML;
    if(document.getElementById('measurementsValue').innerHTML == "Acres"){
        areaSummary = areaSummary * 43560;  // square foot for 1 acres
    }
    var depth = document.getElementById('depth').value;
    var dropdown = document.getElementById('mymeasurementDropdown').value;

    var volumeResult = (Number(areaSummary * (depth/12)).toFixed(2));
    document.getElementById('summaryResultCubic').innerHTML = volumeResult;
    return volumeResult;
}
function convertCubicFeetToYards(){
    
    var volumeResult = getCubicFeetResult();
    var resultCubicYards = Number(volumeResult / 27).toFixed(2);
    document.getElementById('summaryResultCubic').innerHTML = resultCubicYards;
}
function convertCubicFeetToMeters(){
    var volumeResult = getCubicFeetResult();
    var resultCubicMeters = Number(volumeResult / 35.315).toFixed(2);
    document.getElementById('summaryResultCubic').innerHTML = resultCubicMeters;
}

function hideOrShowSummaryArea(flag){
    if(flag==1){
        document.getElementById('calculateSummaryArea').style.display='none';
    }else{
        document.getElementById('calculateSummaryArea').style.display='block';
    }
}


function hideShow(flag){
    //alert('called '+flag);
    if(flag==1){
        
        setUnitOfMeasurements("Sq Ft");
        document.getElementById('squareFootage').style.display='block';
        document.getElementById('summaryFootageAcreage').style.display='none';
        
        let lengthElements = document.getElementsByName("lengthInput");
        let widthElements = document.getElementsByName("widthInput");
        let rowAreaCalcElements = document.getElementsByName("rowAreaCalc");
        var sum = 0;
        if(lengthElements.length == widthElements.length){
            for (let i = 0; i < lengthElements.length; i++) {
                document.getElementsByClassName("area")[i].innerHTML = "Area"+(i+1);
                //sum = sum + lengthElements[i].value * widthElements[i].value;
                if($.isNumeric( lengthElements[i].value) && $.isNumeric( widthElements[i].value )){
                    document.getElementsByClassName("rowAreaCalc")[i].innerHTML = ( lengthElements[i].value * widthElements[i].value ) + " Sq Ft";    
                    sum = sum + lengthElements[i].value * widthElements[i].value;
                }
            }
        }
        setTotalArea(sum);
        
    }else{
        //alert('print logs for 2: ' + this.value  );
        document.getElementById('squareFootage').style.display='none';
        document.getElementById('summaryFootageAcreage').style.display='block';
        var areaValue = document.getElementById('calcArea').value;
        if(areaValue == '' || areaValue == null || areaValue == 'undefined'){
            areaValue = 0;
        }
        //alert(areaValue);
        setTotalArea(areaValue);
    }
}

function areaCalculation(input1,input2){
    var result = input1+input2;
    document.getElementById('summary').innerHTML = result;
}

function setTotalArea(input){
  //  alert('input '+input);
    document.getElementById('summary').innerHTML = input;
}

function getUnitOfMeasurements(){
    return document.getElementById('measurementDropdown');
}
function setUnitOfMeasurements(unit){
    //alert(unit);
    document.getElementById('measurementsValue').innerHTML = unit;
}
function changeMeasure(measureval){
    

}
