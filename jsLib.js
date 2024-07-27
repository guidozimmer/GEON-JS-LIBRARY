// Initialize a counter to keep track of the chart instances
let chartCounter = 1;

// Function to create and return the chart for 18 months
function createChart18Monate(canvasId, containerClass, firstdata18Monate, secondData18Monate) {
    var labels = ["18 Monate"];
    var barColors1 = ["#348200"];
    var barColors2 = ["#98CB35"];
    var borderColors1 = ["#348200"];
    var borderColors2 = ["#348200"];
    var valueRange18Monate = [0, firstdata18Monate[0] + secondData18Monate[0]];
    var canvas = document.getElementById(canvasId);
    var autobahnclusterDiv = document.querySelector(containerClass);

    if (autobahnclusterDiv) {
        canvas.width = autobahnclusterDiv.offsetWidth + 40;
        canvas.height = canvas.height - 11;
    } else {
        console.log('No element with class "projektcluster" found.');
    }

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
            responsive: false,
            maintainAspectRatio: false,
            animation: {
                duration: 0 // Disable animation
            },
            legend: { display: false },
            scales: {
                xAxes: [{
                    ticks: {
                        display: false,
                        min: valueRange18Monate[0],
                        max: valueRange18Monate[1]
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
                    right: 70,
                    left: 10
                }
            }
        }
    });

    var valueId1 = `value${chartCounter}_1`;
    var valueId2 = `value${chartCounter}_2`;

    document.getElementById(valueId1).innerText = firstdata18Monate[0];
    document.getElementById(valueId2).innerText = secondData18Monate[0];

    chart.update();

    function updatePosition() {
        const bar1 = chart.getDatasetMeta(0).data[0];
        const bar2 = chart.getDatasetMeta(1).data[0];

        if (!bar1 || !bar2) {
            console.log('Bar(s) not found.');
            return;
        }

        const bar1Width = bar1._model.base - bar1._model.x;
        const bar2Width = bar2._model.base - bar2._model.x;

        var value1 = document.getElementById(valueId1);
        var value2 = document.getElementById(valueId2);

        var offset1 = bar1Width + 140;
        var offset2 = bar2Width + 70;

        var currentLeft1 = parseInt(window.getComputedStyle(value1).left, 10);
        var currentLeft2 = parseInt(window.getComputedStyle(value2).left, 10);

        value1.style.left = (currentLeft1 - offset1) + "px";
        value2.style.left = (currentLeft2 - offset2) + "px";
    }

    updatePosition();
    chartCounter++;
}

// Function to create and return the chart for 36 months
function createChart36Monate(canvasId, containerClass, firstdata36Monate, secondData36Monate) {
    var labels = ["36 Monate"];
    var barColors1 = ["#348200"];
    var barColors2 = ["#98CB35"];
    var borderColors1 = ["#A3D33A"];
    var borderColors2 = ["#348200"];
    var valueRange36Monate = [0, firstdata36Monate[0] + secondData36Monate[0]];
    var canvas = document.getElementById(canvasId);
    var autobahnclusterDiv = document.querySelector(containerClass);

    if (autobahnclusterDiv) {
        canvas.width = autobahnclusterDiv.offsetWidth + 40;
        canvas.height = canvas.height - 11;
    } else {
        console.log('No element with class "autobahn" found.');
    }

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
            responsive: false,
            maintainAspectRatio: false,
            animation: {
                duration: 0 // Disable animation
            },
            legend: { display: false },
            scales: {
                xAxes: [{
                    ticks: {
                        display: false,
                        min: valueRange36Monate[0],
                        max: valueRange36Monate[1]
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
                    right: 70,
                    left: 10
                }
            }
        }
    });

    var valueId1 = `value${chartCounter}_1`;
    var valueId2 = `value${chartCounter}_2`;

    document.getElementById(valueId1).innerText = firstdata36Monate[0];
    document.getElementById(valueId2).innerText = secondData36Monate[0];

    chart.update();

    function updatePosition() {
        const bar1 = chart.getDatasetMeta(0).data[0];
        const bar2 = chart.getDatasetMeta(1).data[0];

        if (!bar1 || !bar2) {
            console.log('Bar(s) not found.');
            return;
        }

        const bar1Width = bar1._model.base - bar1._model.x;
        const bar2Width = bar2._model.base - bar2._model.x;

        var value1 = document.getElementById(valueId1);
        var value2 = document.getElementById(valueId2);

        var offset1 = bar1Width + 140;
        var offset2 = bar2Width + 70;

        var currentLeft1 = parseInt(window.getComputedStyle(value1).left, 10);
        var currentLeft2 = parseInt(window.getComputedStyle(value2).left, 10);

        value1.style.left = (currentLeft1 - offset1) + "px";
        value2.style.left = (currentLeft2 - offset2) + "px";
    }

    updatePosition();
    chartCounter++;
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    function getElementCoordinates(element) {
        const rect = element.getBoundingClientRect();
        return {
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX,
            right: rect.right + window.scrollX
        };
    }

    const lineCanvas = document.getElementById('lineCanvas');

    if (!lineCanvas) {
        console.error('Canvas not found');
        return;
    } else {
        console.log('Canvas found');
    }

    lineCanvas.width = window.innerWidth;
    lineCanvas.height = window.innerHeight;

    const ctx = lineCanvas.getContext('2d');

    if (!ctx) {
        console.error('Failed to get 2D context');
        return;
    } else {
        console.log('2D context obtained');
    }

    const charts = document.querySelectorAll('canvas[id^="Chart"]');

    for (let i = 0; i < charts.length; i += 2) {
        const canvas1 = charts[i];
        const canvas2 = charts[i + 1];

        if (!canvas1 || !canvas2) {
            console.error('Failed to get canvas elements for pair', i, i + 1);
            continue;
        } else {
            console.log('Canvas elements obtained for pair', i, i + 1);
        }

        const coords1 = getElementCoordinates(canvas1);
        const coords2 = getElementCoordinates(canvas2);

        console.log('Coordinates of chart', i + 1, ':', coords1);
        console.log('Coordinates of chart', i + 2, ':', coords2);

        const topCoords = {
            x: coords1.left + 78,
            y: coords1.top + 4
        };
        const bottomCoords = {
            x: coords2.left + 78,
            y: coords2.bottom - 4
        };

        console.log('Top coordinates of chart', i + 1, '(moved 50px right):', topCoords);
        console.log('Bottom coordinates of chart', i + 2, '(moved 50px right):', bottomCoords);

        ctx.beginPath();
        ctx.moveTo(topCoords.x, topCoords.y);
        ctx.lineTo(bottomCoords.x, bottomCoords.y);
        ctx.strokeStyle = '#348200';
        ctx.lineWidth = 0.5;
        ctx.stroke();

        console.log('Line drawn from chart', i + 1, 'to chart', i + 2);
    }
});

function initializeCharts() {
    createChart18Monate('Chart1', '.autobahn', [2000], [150]);
    createChart36Monate('Chart2', '.autobahn', [130], [600]);

    createChart18Monate('Chart3', '.bahnstrecke', [200], [80]);
    createChart36Monate('Chart4', '.bahnstrecke', [100], [100]);

    createChart18Monate('Chart5', '.landwirtschaft', [150], [400]);
    createChart36Monate('Chart6', '.landwirtschaft', [250], [120]);

    createChart18Monate('Chart7', '.batteriespeicher', [120], [60]);
    createChart36Monate('Chart8', '.batteriespeicher', [100], [150]);
}

initializeCharts();

// Attach functions to the global window object
//window.createChart18Monate = createChart18Monate;
//window.createChart36Monate = createChart36Monate;
