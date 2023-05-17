
$( document ).ready(function() {  
   loadData();
   
});

function loadData(){
    
   $.each(dataList, function(val, text) {
        let option = document.createElement("option");
        option.text = text.MATERIAL_TYPE;
        option.value = text.Id;
        document.getElementById("mymeasurementDropdown").appendChild(option);
        
    });
}


const dataList=[{      
    Id:0,      
    MATERIAL_TYPE: 'Washed Pea Gravel',
    PRICE_TON: 27.00,
    FIRST_Sq_Ft: 250,
    SECOND_Sq_Ft: 125,
    THIRD_Sq_Ft: 83, 
    FOURTH_Sq_Ft: 63,
    FIFTH_Sq_Ft: 50,
    SIXTH_Sq_Ft: 42,
    SEVENTH_Sq_Ft: 36,
    EIGHTH_Sq_Ft: 31,
    NINTH_Sq_Ft: 28,
    TENTH_Sq_Ft: 25,
    ELEVENTH_Sq_Ft: 23,
    TWELFTH_Sq_Ft: 21      
 },    
 {
    Id:1,      
    MATERIAL_TYPE: '3/4" Washed Gravel (River Rock)',
    PRICE_TON: 27.00,
    FIRST_Sq_Ft: 250,
    SECOND_Sq_Ft: 125,
    THIRD_Sq_Ft: 83, 
    FOURTH_Sq_Ft: 63,
    FIFTH_Sq_Ft: 50,
    SIXTH_Sq_Ft: 42,
    SEVENTH_Sq_Ft: 36,
    EIGHTH_Sq_Ft: 31,
    NINTH_Sq_Ft: 28,
    TENTH_Sq_Ft: 25,
    ELEVENTH_Sq_Ft: 23,
    TWELFTH_Sq_Ft: 21
 },
 {
    Id:2,      
    MATERIAL_TYPE: '1 1/2" Washed Gravel (River Rock)',
    PRICE_TON: 27.00,
    FIRST_Sq_Ft: 250,
    SECOND_Sq_Ft: 125,
    THIRD_Sq_Ft: 83, 
    FOURTH_Sq_Ft: 63,
    FIFTH_Sq_Ft: 50,
    SIXTH_Sq_Ft: 42,
    SEVENTH_Sq_Ft: 36,
    EIGHTH_Sq_Ft: 31,
    NINTH_Sq_Ft: 28,
    TENTH_Sq_Ft: 25,
    ELEVENTH_Sq_Ft: 23,
    TWELFTH_Sq_Ft: 21
 },
 {
    Id:3,      
    MATERIAL_TYPE: 'White Rock, CM11, 5/8" â€“ 1"',
    PRICE_TON: 27.00,
    FIRST_Sq_Ft: 250,
    SECOND_Sq_Ft: 125,
    THIRD_Sq_Ft: 83, 
    FOURTH_Sq_Ft: 63,
    FIFTH_Sq_Ft: 50,
    SIXTH_Sq_Ft: 42,
    SEVENTH_Sq_Ft: 36,
    EIGHTH_Sq_Ft: 31,
    NINTH_Sq_Ft: 28,
    TENTH_Sq_Ft: 25,
    ELEVENTH_Sq_Ft: 23,
    TWELFTH_Sq_Ft: 21
 },
 {
    Id:4,      
    MATERIAL_TYPE: '3â„8 Chipped White Rock',
    PRICE_TON: 27.00,
    FIRST_Sq_Ft: 250,
    SECOND_Sq_Ft: 125,
    THIRD_Sq_Ft: 83, 
    FOURTH_Sq_Ft: 63,
    FIFTH_Sq_Ft: 50,
    SIXTH_Sq_Ft: 42,
    SEVENTH_Sq_Ft: 36,
    EIGHTH_Sq_Ft: 31,
    NINTH_Sq_Ft: 28,
    TENTH_Sq_Ft: 25,
    ELEVENTH_Sq_Ft: 23,
    TWELFTH_Sq_Ft: 21
 },
 {
    Id:5,      
    MATERIAL_TYPE: 'Oversized Washed Gravel 2"-6"',
    PRICE_TON: 27.00,
    FIRST_Sq_Ft: 250,
    SECOND_Sq_Ft: 125,
    THIRD_Sq_Ft: 83, 
    FOURTH_Sq_Ft: 63,
    FIFTH_Sq_Ft: 50,
    SIXTH_Sq_Ft: 42,
    SEVENTH_Sq_Ft: 36,
    EIGHTH_Sq_Ft: 31,
    NINTH_Sq_Ft: 28,
    TENTH_Sq_Ft: 25,
    ELEVENTH_Sq_Ft: 23,
    TWELFTH_Sq_Ft: 21
 },
 {
    Id:6,      
    MATERIAL_TYPE: 'CA 6 Gravel Mix 1" or less',
    PRICE_TON: 27.00,
    FIRST_Sq_Ft: 250,
    SECOND_Sq_Ft: 125,
    THIRD_Sq_Ft: 83, 
    FOURTH_Sq_Ft: 63,
    FIFTH_Sq_Ft: 50,
    SIXTH_Sq_Ft: 42,
    SEVENTH_Sq_Ft: 36,
    EIGHTH_Sq_Ft: 31,
    NINTH_Sq_Ft: 28,
    TENTH_Sq_Ft: 25,
    ELEVENTH_Sq_Ft: 23,
    TWELFTH_Sq_Ft: 21
 },
 {
    Id:7,      
    MATERIAL_TYPE: 'CA 6 Gravel Mix 1/2" or less',
    PRICE_TON: 27.00,
    FIRST_Sq_Ft: 250,
    SECOND_Sq_Ft: 125,
    THIRD_Sq_Ft: 83, 
    FOURTH_Sq_Ft: 63,
    FIFTH_Sq_Ft: 50,
    SIXTH_Sq_Ft: 42,
    SEVENTH_Sq_Ft: 36,
    EIGHTH_Sq_Ft: 31,
    NINTH_Sq_Ft: 28,
    TENTH_Sq_Ft: 25,
    ELEVENTH_Sq_Ft: 23,
    TWELFTH_Sq_Ft: 21
 },
 {
    Id:8,      
    MATERIAL_TYPE: 'Mason Sand',
    PRICE_TON: 27.00,
    FIRST_Sq_Ft: 250,
    SECOND_Sq_Ft: 125,
    THIRD_Sq_Ft: 83, 
    FOURTH_Sq_Ft: 63,
    FIFTH_Sq_Ft: 50,
    SIXTH_Sq_Ft: 42,
    SEVENTH_Sq_Ft: 36,
    EIGHTH_Sq_Ft: 31,
    NINTH_Sq_Ft: 28,
    TENTH_Sq_Ft: 25,
    ELEVENTH_Sq_Ft: 23,
    TWELFTH_Sq_Ft: 21
 }];