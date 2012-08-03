// ------------------------------------------
// SETTINGS
// ------------------------------------------

WebAppLoader.addModule({ name: 'chartDefaults', isShared: true }, function () {
    var chartDefaults    = {},
        commonSettings   = {},
        barChart         = {},
        bubbleChart      = {},
        columnChart      = {},
        gaugeChart       = {},
        gridChart        = {},
        lineChart        = {},
        pieChart         = {},
        treeMapChart     = {},
        resizingSettings = {},
        output           = this.getConsole();

    // COMMON CHART SETTINGS
    commonSettings = {
        forceIFrame: false,
        labelFontName: 'HelveticaNeue-Light',
        labelFontSize: 12,
        titleFontName: 'HelveticaNeue-Bold',
        titleFontSize: 25
    };

    // BUBBLE CHART
    bubbleChart = {
        chartArea: { left: 80, top: 35, width: '70%', height: '80%' },
        fontName: commonSettings.labelFontName,
        fontSize: commonSettings.labelFontSize,
        forceIFrame: commonSettings.forceIFrame,
        hAxis: {
            titleTextStyle: {
                fontName: commonSettings.titleFontName,
                fontSize: commonSettings.titleFontSize
            }
        },
        sizeAxis: {
            maxSize: 100,
            maxValue: 100,
            minSize: 1,
            minValue: 1
        },
        vAxis: {
            titleTextStyle: {
                fontName: commonSettings.titleFontName,
                fontSize: commonSettings.titleFontSize
            }
        }
    };

    // BAR CHART
    barChart = {
        chartArea: { left: '20%', width: '60%', height: '80%' },
        fontName: commonSettings.labelFontName,
        fontSize: commonSettings.labelFontSize,
        forceIFrame: commonSettings.forceIFrame,
        vAxis: {
            titleTextStyle: {
                fontName: commonSettings.titleFontName,
                fontSize: commonSettings.titleFontSize
            }
        }
    };

    // COLUMN CHART
    columnChart = {
        chartArea: { left: '10%', width: '70%', height: '75%' },
        fontName: commonSettings.labelFontName,
        fontSize: commonSettings.labelFontSize,
        forceIFrame: commonSettings.forceIFrame,
        vAxis: {
            titleTextStyle: {
                fontName: commonSettings.titleFontName,
                fontSize: commonSettings.titleFontSize
            }
        }
    };

    // GAUGE CHART
    gaugeChart = {
        forceIFrame: commonSettings.forceIFrame,
        height: 250,
        greenFrom: 0,
        greenTo: 4,
        yellowFrom: 4,
        yellowTo: 6,
        redFrom: 6,
        redTo: 20,
        max: 20,
        minorTicks: 5
    };

    // GRID CHART
    gridChart = {
        allowHtml: true,
        alternatingRowStyle: true,
        // forceIFrame: commonSettings.forceIFrame,
        // width: '95%', 
        // height: '600px !important',
        page: 'enable',
        pageSize: 10,
        cssClassNames: {
            headerRow: 'headerRow',
            tableRow: 'tableRow',
            oddTableRow: 'oddTableRow',
            selectedTableRow: 'selectedTableRow',
            hoverTableRow: 'hoverTableRow'
        }
    };

    // LINE CHART
    lineChart = {
        chartArea: { left: 80, top: 35, width: '75%', height: '80%' },
        fontName: commonSettings.labelFontName,
        fontSize: commonSettings.labelFontSize,
        forceIFrame: commonSettings.forceIFrame
    };

    // PIE CHART
    pieChart = {
        chartArea: { left: 80, width: '75%', height: '80%' },
        fontName: commonSettings.labelFontName,
        fontSize: commonSettings.labelFontSize,
        forceIFrame: commonSettings.forceIFrame,
        is3D: true,
        legend: { position: 'none' },
        pieSliceText: 'label',
        pieSliceTextStyle: { color: '#000000' }
    };

    // TREE MAP (HEATMAP) CHART
    treeMapChart = {
        fontFamily: commonSettings.labelFontName,
        fontSize: commonSettings.labelFontSize,
        forceIFrame: commonSettings.forceIFrame,
        headerHeight: 25,
        minColor: '#cc0000',
        midColor: '#ffffff',
        maxColor: '#6699cc',
        maxDepth: 3
    };

    // RESIZING SETTINGS
    resizingSettings = {
        // Maximum values used in presentation mode.
        chartWidth: 960, 
        tableWidth: 980,

        // Charts rescaling ratio.
        chartLandscapeScaleRatio: 1,
        chartPortraitScaleRatio: 0.80, 

        // Tables rescaling ratio.
        tableLandscapeScaleRatio: 1,
        tablePortraitScaleRatio: 0.80,

        rowHeight: 50, // Same value of .tableRow and .oddTableRow
        headerHeight: 50, // Same value of .headerRow
        fixedHeight: 10,
        
        calculateTableHeight: function (numRows) {
            return parseInt(numRows * this.rowHeight + this.headerHeight + this.fixedHeight, 10);
        },

        rescaleChart: function (height, deviceOrientation) {
            var chartHeight;

            if (deviceOrientation === 'landscape') {
                chartHeight = parseInt(height * this.chartLandscapeScaleRatio, 10); 
            } else {
                chartHeight = parseInt(height * this.chartPortraitScaleRatio, 10); 
            }

            return chartHeight;
        },

        rescaleTable: function (height, deviceOrientation) {
            var tableHeight;

            if (deviceOrientation === 'landscape') {
                tableHeight = parseInt(height * this.tableLandscapeScaleRatio, 10); 
            } else {
                tableHeight = parseInt(height * this.tablePortraitScaleRatio, 10); 
            }

            return tableHeight;
        }
    };

    function changeSetting(key, value) {
        commonSettings[key] = value;
        output.log('change setting');
    }

    // Assign the specific chart defaults to the container object.
    chartDefaults.BarChart = barChart;
    chartDefaults.BubbleChart = bubbleChart;
    chartDefaults.ColumnChart = columnChart;
    chartDefaults.Gauge = gaugeChart;
    chartDefaults.LineChart = lineChart;
    chartDefaults.PieChart = pieChart;
    chartDefaults.Table = gridChart;
    chartDefaults.TreeMap = treeMapChart;
    chartDefaults.resizingSettings = resizingSettings;

    chartDefaults.set = changeSetting; // Alias

    return chartDefaults;
});