function totalScore() {
    var benchmark = 0;
    var Subject1st = +document.getElementById("Subject1st").value;
    var Subject2nd = +document.getElementById("Subject2nd").value;
    var Subject3rd = +document.getElementById("Subject3rd").value;
    var totalScore;
    var priorityPoint;
    var A = 2.5;
    var B =  1.5;
    var C = 1 ;
    var D = 0;
    var H= 2;
    var J = 1;
    var K =0.5;
    var L = 0;


    var Category;
    var Object;
    var AInput = document.getElementById("A");
    var BInput = document.getElementById("B");
    var CInput = document.getElementById("C");
    var DInput = document.getElementById("D");
    var Object1Input = document.getElementById("Object1");
    var Object2Input = document.getElementById("Object2");
    var Object3Input = document.getElementById("Object3");
    var Object4Input = document.getElementById("Object4");
    if (Object1Input === true) {
        Object = H;

    } else if (Object2Input === true) {
        Object = J ;
    } else if (Object3Input === true) {
        Object = K ;
    } else if (Object4Input === true) {
        Object = L;
    } else {
        alert("Vui lòng chọn khu vực ưu tiên"); return;
    };

    if (AInput.checked === true) {
        Category = A;

    } else if (BInput.checked === true) {
        Category = B;
    } else if (CInput.checked === true) {
        Category = C ;
    } else if (DInput.checked === true) {
        Category = D;
    } else {
        alert("Vui lòng chọn đối tượng ưu tiên"); return;
    };


    totalScore = Subject1st + Subject2nd + Subject3rd + Category + Object

    document.getElementById('totalScore').innerHTML = result;

}

