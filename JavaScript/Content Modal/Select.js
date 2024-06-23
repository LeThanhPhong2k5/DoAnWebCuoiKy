function showSecondSelect() {
    var firstSelect = document.getElementById("choose-pay").value;
    var secondSelectContainer = document.getElementById("select2Container");
    var secondSelect = document.getElementById("select2");

    // Clear current options
    secondSelect.innerHTML = "";

    if (firstSelect) {
        // Define options based on first select value
        var options = [];
        if (firstSelect == "choose-pay-cash") {

        } else if (firstSelect == "choose-pay-mobile-banking") {
            options = ["Vietcombank", "Techcombank", "VPBank", "BIDV", "MBBank", "Agribank"];
        } else if (firstSelect == "choose-pay-atm") {

        }

        // Populate second select with new options
        for (var i = 0; i < options.length; i++) {
            var opt = document.createElement("option");
            opt.value = options[i];
            opt.innerHTML = options[i];
            secondSelect.appendChild(opt);
        }

        // Show the second select
        secondSelectContainer.hidden = false;
    } else {
        // Hide the second select if no option is selected in the first select
        secondSelectContainer.hidden = true;
    }
}