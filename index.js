
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
        Price = (consumptionRate * 500) + (150 * (consumptionRate - 50));
    }
    else if (consumptionRate > 100 && 150 >= consumptionRate) {
        Price = (consumptionRate * 500) + (150 * (consumptionRate - 50)) + (200 * (consumptionRate - 100));
    }
    else if (150 < consumptionRate && consumptionRate <= 350) {
        Price =
        (consumptionRate * 500) + (150 * (consumptionRate - 50)) + (200 * (consumptionRate - 100)) + (250 * (consumptionRate - 150));
    }
    else (
        Price = (consumptionRate * 500) + (150 * (consumptionRate - 50)) + (200 * (consumptionRate - 100)) + (250 * (consumptionRate - 150)) + (200 * (consumptionRate - 350))
    );

    Price = names + Price;
    document.getElementById("count").innerHTML = Price;
}
