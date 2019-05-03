var interest = 1.02;
var margin = 0.1;

var slider1 = document.getElementById("slider-1");
var output1 = document.getElementById("caskNumber");
var result1 = document.getElementById("result-1")
var slider2 = document.getElementById("slider-2");
var output2 = document.getElementById("yearNumber");
var result2 = document.getElementById("result-2");

function selectOption(event) {
    var btn = event.srcElement.id;

    switch (btn) {
        case 'btn-1':
            $("#" + btn).addClass("selected");
            $("#" + btn).siblings().removeClass("selected");
            $("#option-1").addClass("active");
            $("#option-1").siblings().removeClass("active");
            interest = 1.02;
            margin = 0.1;
            setResults();
            break;

        case 'btn-2':
            $("#" + btn).addClass("selected");
            $("#" + btn).siblings().removeClass("selected");
            $("#option-2").addClass("active");
            $("#option-2").siblings().removeClass("active");
            interest = 1.01;
            margin = 0.05;
            setResults();
            break;

        case 'btn-3':
            $("#" + btn).addClass("selected");
            $("#" + btn).siblings().removeClass("selected");
            $("#option-3").addClass("active");
            $("#option-3").siblings().removeClass("active");
            interest = 1.01;
            margin = 0.08;
            setResults();
            break;

        case 'btn-4':
            $("#" + btn).addClass("selected");
            $("#" + btn).siblings().removeClass("selected");
            $("#option-4").addClass("active");
            $("#option-4").siblings().removeClass("active");
            interest = 1.01;
            margin = 0.15;
            setResults();
            break;
    }
}

function setResults() {

    var casks = slider1.value;
    var investment = (slider1.value) * 3000;
    var years = slider2.value;
    var netReturn = investment * Math.pow(interest, years);
    var netReturnMargin = netReturn * margin;

    output1.innerHTML = casks + ' casks';
    result1.innerHTML = '€' + investment;
    output2.innerHTML = years + ' years';
    result2.innerHTML = '€' + (netReturn - netReturnMargin).toFixed(0) + ' - ' + '€' + (netReturn + netReturnMargin).toFixed(0);

}