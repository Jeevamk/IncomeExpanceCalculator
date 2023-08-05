var inAmtArray = [];
function incomeSubmit() {
    var category = document.getElementById("inCat").value;
    var amount = document.getElementById("incPr").value;
    document.getElementById('inCat').value="";
    document.getElementById('incPr').value="";
    

    if (category.trim() === "" || amount.trim() === "") {
        alert("Please fill in both Category and Amount fields");
        return false;
    }

    document.getElementById("incTbl").style.display = "block";

    var table = document.getElementById("incTbl");
    var row = table.insertRow(-1);
    var incomeCat = row.insertCell(0);
    var inAmt = row.insertCell(1);

    incomeCat.innerHTML = category;
    inAmt.innerHTML = amount;

    var inAmtValue = parseFloat(amount);
    inAmtArray.push(inAmtValue);

    var sumOfInAmt = inAmtArray.reduce(function (total, current) {
        return total + current;
    });

    document.getElementById('demo').innerHTML = 'Total Income is: ' + sumOfInAmt + '/-';

    updatePieChart();
    

    return;
}



var expAmtArray = [];

function expanceSubmit() {
    var categoryex = document.getElementById("inExp").value;
    var amountex = document.getElementById("expPr").value;

    document.getElementById('inExp').value="";
    document.getElementById('expPr').value="";

    
    

    if (categoryex.trim() === "" || amountex.trim() === "") {
        alert("Please fill in both Category and Amount fields.");
        return false;
    }

    document.getElementById("incTbl1").style.display = "block";

    var table = document.getElementById("incTbl1");
    var row = table.insertRow(-1);
    var expanceCat = row.insertCell(0);
    var expAmt = row.insertCell(1);
    

    expanceCat.innerHTML = categoryex;
    expAmt.innerHTML = amountex;
    

    var expAmtValue = parseFloat(amountex);
    expAmtArray.push(expAmtValue);


    var sumOfexpAmt = expAmtArray.reduce(function (total, current) {
        return total + current;
    });
    document.getElementById('demo1').innerHTML = 'Total Expance is:' + (("Sum of expAmt:", sumOfexpAmt)) + '/-';

    updatePieChart();
    
    return;
}

function updatePieChart() {
    var incomeSum = inAmtArray.reduce(function (total, current) {
        return total + current;
    });

    var expanceSum = expAmtArray.reduce(function (total, current) {
        return total + current;
    });

    const xValues = ["Income", "Expense"];
    const yValues = [incomeSum, expanceSum];

    const barColors = [
        "#b91d47",
        "#00aba9"
    ];


    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true,
                text: "Income Expance pie chart"
            }
        }
    });
}
