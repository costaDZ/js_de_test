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
    // creat a new arr and grap the data 
    //[!IMPORTANT => we can creat a new Object refrence if we want to save our original data]
    let dataWithTotal = [];

    let objProps = [];

    // add total(key) to each object in our data
    data.reduce((acc, val, i) => {
        acc = val;
        dataWithTotal.push(val);

        if (!objProps.length) {
            objProps = Object
                .getOwnPropertyNames(val)
                .filter(item => item !== "period");
        }

        let total = objProps.reduce((acc, item) => acc += val[item], 0) / 3;

        dataWithTotal[i]["total"] = total;
    }, {});


    // get all the [period] keys 
    let labels = dataWithTotal.map(item => item['period']);

    //get graph values in one array buy using a helper function
    objProps.push("total");

    let graphValues = [];
    for (let prop of objProps) {
        graphValues.push(getGraphValues(dataWithTotal, prop));
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
function getGraphValues(obj, prop) {
    return temp = {
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
}

generateGraph();

//I have added a lot of comments to my code 
//which is unusual to make some points for the reader only.

// :) good bye 



