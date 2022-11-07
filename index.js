
document.getElementById("btnresult").onclick = function () {
    var Subject1st = +document.getElementById("monthu1").value;
    var Subject2nd = + document.getElementById("monthu2").value;
    var Subject3rd = +document.getElementById("monthu3").value;
    var benchmark = +document.getElementById("diemchuan").value;
    var AInput = document.getElementById("A");
    var BInput = document.getElementById("B");
    var CInput = document.getElementById("C");
    var DInput = document.getElementById("D");
    var Object1Input = document.getElementById("Object1");
    var Object2Input = document.getElementById("Object2");
    var Object3Input = document.getElementById("Object3");
    var Object4Input = document.getElementById("Object4");
    var result = "";
    var Object = "";
    var Category = "";

    if (Object1Input.checked === true) {
        Object = 2.5;

    } else if (Object2Input.checked === true) {
        Object = 1.5;
    } else if (Object3Input.checked === true) {
        Object = 1;
    } else if (Object4Input.checked === true) {
        Object = 0;
    } else {
        alert("Vui lòng chọn khu vực ưu tiên"); return;
    };


    if (AInput.checked === true) {
        Category = 2;

    } else if (BInput.checked === true) {
        Category = 1;
    } else if (CInput.checked === true) {
        Category = 0.5;
    } else if (DInput.checked === true) {
        Category = 0;
    } else {
        alert("Vui lòng chọn đối tượng ưu tiên"); return
    };





    if ((Subject1st + Subject2nd + Subject3rd + Object + Category) >= benchmark && Subject1st > 0 && Subject2nd > 0 && Subject3rd > 0) {
        result = "Đậu";
    } else { result = "Rớt"; }


    result = "kết quả" + result
    document.getElementById("ketqua").innerHTML = result
}


document.getElementById("btncount").onclick = function () {
    var names = document.getElementById("name").value;
    var consumptionRate = Number(document.getElementById("consumptionRate").value);
    var Price = " ";
    if (consumptionRate > 0 && consumptionRate <= 50) {
        Price = consumptionRate * 500;
    } else if (consumptionRate > 50 && 100 >= consumptionRate) {
        Price = (50 * 500) + (650 * (consumptionRate - 50));
    }
    else if (consumptionRate > 100 && 200 >= consumptionRate) {
        Price = (50 * 500) + (650 * 50) + (850 * (consumptionRate - 100));
    }
    else if (200 < consumptionRate && consumptionRate <= 350) {
        Price =
            (50 * 500) + (650 * 50) + (850 * 100) + (1100 * (consumptionRate - 200));
    }
    else { Price = (50 * 500) + (650 * 50) + (850 * 100) + (1100 * 150) + (1300 * (consumptionRate - 350)) };

    Price = names + Price.toLocaleString();
    document.getElementById("count").innerHTML = Price;
}


document.getElementById("btnTaxMoney").onclick = function () {
    var names = document.getElementById("names").value;
    var NumberOfDependents = Number(document.getElementById("NumberOfDependents").value);
    var TotalAnnualIncome = Number(document.getElementById("TotalAnnualIncome").value);
    var acmout = " ";
    var nq = (TotalAnnualIncome - 4e+6 - (NumberOfDependents * 1600000))

    if (TotalAnnualIncome <= 60e+6) {
        acmout = nq * 0.05;

    } else if (TotalAnnualIncome <= 120e+6) {
        acmout = (60e+6 * 0.05) + ( ( nq-60e+6)*0.1) ;
       
    } else if (TotalAnnualIncome <= 210e+6) { 
        acmout = (60e+6 * 0.05) + (60e+6*0.1) +(0.15*(nq-120e+6))
    } else if (TotalAnnualIncome <= 384e+6) { 
        acmout = (60e+6 * 0.05) + (60e+6*0.1) +(0.15*120e+6) +(0.2*(nq-210e+6))
     } 
     else if (TotalAnnualIncome <= 624e+6) {
        acmout = (60e+6 * 0.05) + (60e+6*0.1) +(0.15*120e+6) +(0.2*210e+6)+ (0.25*(nq-384e+6))
      }
     else if (TotalAnnualIncome <= 960e+6) { 
        acmout = (60e+6 * 0.05) + (60e+6*0.1) +(0.15*120e+6) +(0.2*210e+6)+ (0.25*384e+6)+ (0.3*(nq-624e+6))

     }
     else {acmout = (60e+6 * 0.05) + (60e+6*0.1) +(0.15*120e+6) +(0.2*210e+6)+ (0.25*384e+6)+ (0.3*624e+6)+(0.35*(nq-960e+6)) };
    acmout = names + acmout.toLocaleString();

    document.getElementById("TaxMoney").innerHTML = acmout;
}



document.getElementById("CableCharge").onclick = function () {
var peopleIsHouses = document.getElementById ("peopleIsHouses").value;
var business = document.getElementById ("business").value;
var A ="";
var B ="";
var result= " ";
if () 
result = names + result.toLocaleString();
document.getElementById("result1").innerHTML = result;
}

