// Initialize a counter to keep track of the chart instances
let chartCounter = 1;
let afterDrawExecuted = false; // Add a flag

// Function to create and return the chart for 18 months
export function createChart18Monate(canvasId, containerClass, firstdata18Monate, secondData18Monate) {
    var labels = ["18 Monate"];
    var barColors1 = ["#348200"]; // Fill color for the first bar
    var barColors2 = ["#98CB35"]; // Fill color for the second bar
    var borderColors1 = ["#348200"]; // Border color for the first bar
    var borderColors2 = ["#348200"]; // Border color for the second bar
    var valueRange18Monate = [0, firstdata18Monate[0] + secondData18Monate[0]]; // Min and max values for the x-axis
    var canvas = document.getElementById(canvasId); // Canvas for graphs
    var autobahnclusterDiv = document.querySelector(containerClass); // Projektcluster Div

    // Adjust the canvas width to match the "projektcluster" div width
    if (autobahnclusterDiv) {
        canvas.width = autobahnclusterDiv.offsetWidth + 40; // Adjusting for some padding
        canvas.heightå = canvas.height - 11;
    } else {
        console.log('No element with class "projektcluster" found.');
    }

    // Create a new chart instance
    var chart = new Chart(canvas, {
        type: "horizontalBar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Graph1-18Monate',
                    backgroundColor: barColors1,
                    borderColor: borderColors1,
                    borderWidth: 1,
                    data: firstdata18Monate
                },
                {
                    label: 'Graph2-18Monate',
                    backgroundColor: barColors2,
                    borderColor: borderColors2,
                    borderWidth: 0.5,
                    data: secondData18Monate
                }
            ]
        },
        options: {
            responsive: false, // Make sure the chart is not responsive to fit the fixed dimensions
            maintainAspectRatio: false,
            legend: { display: false }, // Hides the legend
            scales: {
                xAxes: [{
                    ticks: {
                        display: false,
                        min: valueRange18Monate[0], // Use the first element of valueRange as the min value
                        max: valueRange18Monate[1]  // Use the second element of valueRange as the max value
                    },
                    gridLines: {
                        display: false,
                        drawOnChartArea: false,
                        drawTicks: false,
                        color: "transparent"
                    },
                    drawBorder: true,
                    borderColor: "transparent"
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                    },
                    drawBorder: true,
                    borderColor: "transparent"
                }]
            },
            plugins: {
                datalabels: {
                    display: false
                }
            },
            layout: {
                padding: {
                    right: 70, // Add padding to the right to prevent text cut off
                    left: 10
                }
            }
        }
    });

    // Generate IDs for value elements based on the chartCounter
    var valueId1 = `value${chartCounter}_1`;
    var valueId2 = `value${chartCounter}_2`;

    // Update the corresponding <h2> elements with the chart values
    document.getElementById(valueId1).innerText = firstdata18Monate[0];
    document.getElementById(valueId2).innerText = secondData18Monate[0];


    // Wait for the chart to finish rendering
    chart.update();
    function updatePosition() {
        // Get the elements for both bars in the first dataset
        const bar1 = chart.getDatasetMeta(0).data[0];
        const bar2 = chart.getDatasetMeta(1).data[0];


        if (!bar1) { // Check if the first bar was found
            console.log('First bar not found.');
        } else {
        }

        if (!bar2) { // Check if the second bar was found
            console.log('Second bar not found.');
        } else {
            
            console.log("valueId1: " + valueId1 + "       valueId2: " + valueId2)

            const bar1Width = bar1._model.base - bar1._model.x; // Calculate the width using base and x properties
            const bar2Width = bar2._model.base - bar2._model.x; // Calculate the width using base and x properties

            var value1 = document.getElementById(valueId1); // Canvas for graphs
            var value2 = document.getElementById(valueId2);

            var offset1 = bar1Width + 140;
            var offset2 = bar2Width + 70;

            var currentLeft1 = parseInt(window.getComputedStyle(value1).left, 10);
            var currentLeft2 = parseInt(window.getComputedStyle(value2).left, 10);


            value1.style.left = (currentLeft1 - offset1) + "px";
            value2.style.left = (currentLeft2 - offset2) + "px";


        }
    };

    updatePosition()


    // Increment the chartCounter for the next call
    chartCounter++;
}

// Function to create and return the chart for 36 months
export function createChart36Monate(canvasId, containerClass, firstdata36Monate, secondData36Monate) {
    var labels = ["36 Monate"];
    var barColors1 = ["#348200"]; // Fill color for the first bar
    var barColors2 = ["#98CB35"]; // Fill color for the second bar
    var borderColors1 = ["#A3D33A"]; // Border color for the first bar
    var borderColors2 = ["#348200"]; // Border color for the second bar
    var valueRange36Monate = [0, firstdata36Monate[0] + secondData36Monate[0]]; // Min and max values for the x-axis
    var canvas = document.getElementById(canvasId) // Canvas for graphs
    var autobahnclusterDiv = document.querySelector(containerClass); // Projektcluster Div

    // Adjust the canvas width to match the "autobahn" div width
    if (autobahnclusterDiv) {
        canvas.width = autobahnclusterDiv.offsetWidth + 40; // Adjusting for some padding
        canvas.height = canvas.height - 11;
    } else {
        console.log('No element with class "autobahn" found.');
    }

    // Create a new chart instance
    var chart = new Chart(canvas, {
        type: "horizontalBar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Graph1-36Monate',
                    backgroundColor: barColors1,
                    borderColor: borderColors1,
                    borderWidth: 1,
                    data: firstdata36Monate
                },
                {
                    label: 'Graph2-36Monate',
                    backgroundColor: barColors2,
                    borderColor: borderColors2,
                    borderWidth: 0.5,
                    data: secondData36Monate
                }
            ]
        },
        options: {
            responsive: false, // Make sure the chart is not responsive to fit the fixed dimensions
            maintainAspectRatio: false,
            legend: { display: false }, // Hides the legend
            scales: {
                xAxes: [{
                    ticks: {
                        display: false,
                        min: valueRange36Monate[0], // Use the first element of valueRange as the min value
                        max: valueRange36Monate[1]  // Use the second element of valueRange as the max value
                    },
                    gridLines: {
                        display: false,
                        drawOnChartArea: false,
                        drawTicks: false,
                        color: "transparent"
                    },
                    drawBorder: true,
                    borderColor: "transparent"
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                    },
                    drawBorder: true,
                    borderColor: "transparent"
                }]
            },
            plugins: {
                datalabels: {
                    display: false
                }
            },
            layout: {
                padding: {
                    right: 70, // Add padding to the right to prevent text cut off
                    left: 10
                }
            }
        }
    });

    // Generate IDs for value elements based on the chartCounter
    var valueId1 = `value${chartCounter}_1`;
    var valueId2 = `value${chartCounter}_2`;

    // Update the corresponding <h2> elements with the chart values
    document.getElementById(valueId1).innerText = firstdata36Monate[0];
    document.getElementById(valueId2).innerText = secondData36Monate[0];

    

    // Wait for the chart to finish rendering
    chart.update();
    function updatePosition() {
        // Get the elements for both bars in the first dataset
        const bar1 = chart.getDatasetMeta(0).data[0];
        const bar2 = chart.getDatasetMeta(1).data[0];


        if (!bar1) { // Check if the first bar was found
            console.log('First bar not found.');
        } else {
        }

        if (!bar2) { // Check if the second bar was found
            console.log('Second bar not found.');
        } else {
            
            const bar1Width = bar1._model.base - bar1._model.x; // Calculate the width using base and x properties
            const bar2Width = bar2._model.base - bar2._model.x; // Calculate the width using base and x properties

            var value1 = document.getElementById(valueId1); // Canvas for graphs
            var value2 = document.getElementById(valueId2);

            var offset1 = bar1Width + 140;
            var offset2 = bar2Width + 70;

            var currentLeft1 = parseInt(window.getComputedStyle(value1).left, 10);
            var currentLeft2 = parseInt(window.getComputedStyle(value2).left, 10);


            value1.style.left = (currentLeft1 - offset1) + "px";
            value2.style.left = (currentLeft2 - offset2) + "px";


        }
    };

    updatePosition()



    // Increment the chartCounter for the next call
    chartCounter++;
}


module.exports = {
    createChart18Monate,
    createChart36Monate
};