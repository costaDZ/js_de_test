const data = [
    {
        "Cheese": 22.2,
        "CHOCOLATE": 10.3,
        "Impulse": 1.5,
        "period": "2021_26"
    },
    {
        "Cheese": 21.8,
        "CHOCOLATE": 9.8,
        "Impulse": 1.5,
        "period": "2021_27"
    },
    {
        "Cheese": 21.2,
        "CHOCOLATE": 9.7,
        "Impulse": 1.4,
        "period": "2021_28"
    }
];



function generateGraph() {
    // creat a new arr to grap the data 
    //[!IMPORTANT => we can creat a new Object refrence if we want to save our original data as it is]
    let dataWithTotal = [...data];

    // add total (key) to each object in our data
    dataWithTotal.reduce((acc, val, i) => {
        acc = val;
        dataWithTotal[i]["total"] = getTotal(acc);
    }, {});

    // get all the [period] keys from our data
    let labels = dataWithTotal.map(item => item['period']);

    // get all the keys from one object to use it later
    let objProps = Object.getOwnPropertyNames(dataWithTotal[0]);

    // get graph values in one array buy using a helper function
    let graphValues = [];
    for (let prop of objProps) {
        if (prop !== "period") {
            graphValues.push(getGraphValues(dataWithTotal, prop));
        }
    }

    // put the graph data in our chart
    const ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: graphValues
        }
    });
}

//[!IMPORTANT] => we can use helper functions insite the main function 
//but if we want to use latter we keep it outside

// a helper function 
function getTotal(obj) {
    let result = 0;
    for (let keys in obj) {
        if (keys !== "period") {
            result += obj[keys];
        }
    }
    return result / 3;
}

// a helper function 
function getGraphValues(obj, prop) {
    let temp = {
        label: prop,
        data: obj.map(item => item[prop]),
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
    };
    return temp;
}

generateGraph();

// :) good bye 


