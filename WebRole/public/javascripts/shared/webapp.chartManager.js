// ------------------------------------------
// CHART MANAGER
// ------------------------------------------

WebAppLoader.addModule({ name: 'chartManager',
    sharedModules: ['settings', 'chartDefaults', 'colorManager', 'localizationManager', 'ajaxManager'],
    isShared: true, hasEvents: true
}, function () {
    var chartBase = {},
        charts = [],
        eventManager = this.getEventManager(),
        chartDefaults = this.getSharedModule('chartDefaults'),
        siteUrls = this.getSharedModule('settings').siteUrls,
        colorManager = this.getSharedModule('colorManager'),
        lang = this.getSharedModule('localizationManager').getLanguage() || {},
        ajaxManager = this.getSharedModule('ajaxManager'),
        output = this.getConsole(),
        chartCount = 0,
        chartTotal = 0,
        isLoading = false;

    function resetCounter() {
        chartCount = 0;
        chartTotal = 0;
        isLoading = false;
    }

    function startCounter() {
        resetCounter();
        isLoading = true;
    }

    function stopCounter() {
        resetCounter();
    }

    // Function to be called when the chart has finished attempting to load.
    // NOTE: 'Finished' does not necessarily infer success - a chart may have 
    // unsuccessfully attempted to load and in doing so will pass an error
    // object as an argument to this function.
    function onChartReady(info) {
        var container;

        // Regardless of any error state, we still want the attempted load count to be
        // updated and the 'onAnalysisLoading' and 'onAnalysisLoaded' events raised.
        if (isLoading) {
            chartCount += 1;
            eventManager.raiseEvent('onAnalysisLoading', chartCount, chartTotal);

            // If all of the charts created have been loaded...
            if (chartCount === chartTotal) {
                // ...fire the onAnalysisLoaded event.
                stopCounter();
                eventManager.raiseEvent('onAnalysisLoaded');
            }
        }

        if (info && info.chartId) {
            eventManager.raiseEvent('hideMask', info.chartId, info.numRows);
        }

        // If we've got an error...
        if (info && info.errorObj && info.errorObj.id) {
            // ...retrieve the container of the chart causing the problem.
            container = google.visualization.errors.getContainer(info.errorObj.id);
            // Display a generic error message rather than a potentially confusing Google one.
            $('#' + container.id).html(lang.errors.chartFailedText);
        }
    }

    // Function to create a new chart.
    // 'config' - An object containing configuration properties for the chart to be created.
    function create(config) {

        if (!config) {
            output.log('Config is not specified.');
            return;
        }

        var id = config.chartId || null,
            type = config.chartType || null,
            options = config.options || {},
            defaults = {},
            chart = null;

        // Return nothing if a chart ID or chart type has not been specified.
        if (!id || !type) {
            output.log('Chart ID or type is not specified.');
            return;
        }

        // Retrieve the defaults for the given chart type, if available.
        defaults = (chartDefaults && chartDefaults[type])
            ? chartDefaults[type]
            : {};

        // Apply defaults then any overrides to a new object.
        options = $.extend({}, defaults, options);

        // Add a transparent background to all charts.
        options.backgroundColor = { fill: 'transparent' };

        // Create a new visualization wrapper instance, using the type, options and ID.
        chart = new google.visualization.ChartWrapper({
            chartType: type,
            options: options,
            containerId: id
        });

        // ASA: Test
//        var presentationChart = chart.clone();
//        presentationChart.setContainerId('testChart');
        
        eventManager.raiseEvent('chartReady', chart);
        eventManager.raiseEvent('showMask', config.chartId);

        // Although it's not part of the Google API, store 
        // the parameters for this chart in the object.
        chart.endDate = config.endDate;
        chart.include = config.include;
        chart.includeMeasuresFor = config.includeMeasuresFor;
        chart.isGradientReversed = config.isGradientReversed;
        chart.isHeatMap = config.isHeatMap;
        chart.measures = config.measures;
        chart.oData = config.oData;
        chart.seriesType = config.seriesType;
        chart.startDate = config.startDate;
        chart.timePeriods = config.timePeriods;

        
        google.visualization.events.addListener(chart, 'error', function (errorObj) {
            onChartReady({ errorObj: errorObj });
        });
        // Return the chart.
        return chart;
    }

    // Function to load the given chart with data.
    // 'chart'  - The instance of the Google Visualization API chart object to load.
    function load(chart, newRequest) {
        var type, params, url, formatter;

        // Don't attempt to load the chart if it doesn't exist yet.
        if (!chart) {
            return;
        }

        // Restart the counter every new request.
        if (newRequest) {
            startCounter();
        }

        // Increase the running chart total.
        chartTotal++;

        // Get the current chart type.
        type = chart.getChartType();

        // Create a new number formatter.
        formatter = new google.visualization.NumberFormat({
            decimalSymbol: lang.shared.decimalSymbol,
            fractionDigits: 3,
            groupingSymbol: lang.shared.groupingSymbol,
            negativeColor: '#cc0000',
            negativeParens: false
        });

        // Define our basic parameters.
        params = {
            type: type
        };

        // Only include parameters in the object if they exist.
        if (chart.endDate) { params.endDate = chart.endDate; }
        if (chart.include) { params.include = chart.include; }
        if (chart.includeMeasuresFor) { params.includeMeasuresFor = chart.includeMeasuresFor; }
        if (chart.measures) { params.measures = chart.measures; }
        if (chart.oData) { params.oData = chart.oData; }
        if (chart.startDate) { params.startDate = chart.startDate; }
        if (chart.seriesType) { params.seriesType = chart.seriesType; }
        if (chart.timePeriods) { params.timePeriods = chart.timePeriods; }

        // Define the correct URL to use to retrieve data based on the chart type.
        url = (type === 'LineChart') ? siteUrls.timeSeries : siteUrls.segmentsTreeNode;

        eventManager.raiseEvent('showMask', chart.getContainerId());

        // Callback function to be invoked when data is returned from the server.
        function onDataLoaded(data) {
            var dataTable, i, min, max, minDisplay, maxDisplay,
                maxColor, minColor, midColor, midGradientPosition,
                values = [], sliceOptions = [],
                isAllPositiveOrNegative, containerId, gaugeLegendId;

            output.log(data);

            // Create a new visualization DataTable instance based on the data.
            dataTable = new google.visualization.DataTable(data);

            // Loop round the columns, applying the formatter to 'number' columns.
            for (i = 0; i < dataTable.getNumberOfColumns(); i++) {
                if (dataTable.getColumnType(i) === 'number') {
                    formatter.format(dataTable, i);
                }
            }

            // Register the chart with the ready and error event listeners.
            google.visualization.events.addListener(chart, 'ready', function () {
                onChartReady({
                    chartId: chart.getContainerId(),
                    numRows: dataTable.getNumberOfRows() // Used to calculate the height of the chart later.
                }); 
            });

            if (type === 'Table') {
                chart.setOption('height', chartDefaults.resizingSettings.calculateTableHeight(dataTable.getNumberOfRows()));
                chart.setOption('width', chartDefaults.resizingSettings.tableWidth);
            }

            // If our chart is a pie chart and we're displaying it as a heatmap...
            if (type === 'PieChart' && chart.isHeatMap) {

                // ...sort the data by our heatmap measure.
                dataTable.sort([{ column: 2}]);

                // Collate the heatmap measure from the datatable.
                for (i = 0; i < dataTable.getNumberOfRows(); i++) {
                    values.push(dataTable.getValue(i, 2));
                }

                // Get the highest and lowest values from the heatmap measure values.
                min = Math.min.apply(Math, values);
                max = Math.max.apply(Math, values);

                // Get the formatted values for our min and max values from the dataTable,
                // since they already have the correct decimal accuracy and localization.
                // If the min value somehow doesn't exist in the values collection, the
                // dataTable has given us a null value, which we take to mean zero.
                if ($.inArray(min, values) !== -1) {
                    minDisplay = dataTable.getFormattedValue($.inArray(min, values), 2);
                } else {
                    minDisplay = '0';
                }

                if ($.inArray(max, values) !== -1) {
                    maxDisplay = dataTable.getFormattedValue($.inArray(max, values), 2);
                } else {
                    maxDisplay = '0';
                }

                // Determine the colours we need to use for our gauge.
                minColor = colorManager.getColorInRange(min, min, max, chart.isGradientReversed);
                midColor = colorManager.getColorInRange(0, min, max, chart.isGradientReversed);
                maxColor = colorManager.getColorInRange(max, min, max, chart.isGradientReversed);

                // Determine if the values are all positive or all negative.
                isAllPositiveOrNegative = (min >= 0 && max >= 0) || (min <= 0 && max <= 0);

                // Calculate the percentage position of the mid gradient point if we'll need it.
                if (!isAllPositiveOrNegative) {
                    midGradientPosition = 100 - (100 * ((0 - min) / (max - min)));
                }

                // Loop round the values, and use the colorManager to generate 
                // a colour in the gradient range for that measure value.
                for (i = 0; i < values.length; i++) {
                    sliceOptions.push({
                        color: colorManager.getColorInRange(values[i], min, max, chart.isGradientReversed)
                    });
                }

                // Set the colours as part of the 'slices' chart option.
                chart.setOption('slices', sliceOptions);

                // Get the chart's container and generate a unique ID for this chart's gauge.
                containerId = chart.getContainerId();
                gaugeLegendId = containerId + '-gaugeLegend';

                // Attach an event handler to the 'ready' event.
                google.visualization.events.addListener(chart, 'ready', function () {
                    var linearGradientCss, gradientCss, gaugeLegend;

                    // Remove any trace of an existing gauge.
                    $('#' + gaugeLegendId).remove();

                    // Add an element we can style to the chart's container.
                    $('#' + containerId).append(
                        '<div id="' + gaugeLegendId + '" class="gaugeLegend">' +
                        '    <span class="gaugeLegendMaxValue">' + maxDisplay + '</span>' +
                        '    <span class="gaugeLegendSelectedValue"></span>' +
                        '    <span class="gaugeLegendMinValue">' + minDisplay + '</span>' +
                        '</div>'
                    );

                    // Now we've recreated the gauge, store a reference to it.
                    gaugeLegend = $('#' + gaugeLegendId);

                    // If the values are all positive or all negative, we'll just need to create a CSS gradient 
                    // from the max to min colours. If not, we'll need to go through the mid colour on the way.
                    linearGradientCss = isAllPositiveOrNegative ?
                        'linear-gradient(bottom, ' + maxColor + ' 0%, ' + minColor + ' 100%)' :
                        'linear-gradient(bottom, ' + maxColor + ' 0%, ' + midColor + ' ' + midGradientPosition + '%, ' + minColor + ' 100%)';

                    gradientCss = isAllPositiveOrNegative ?
                        'gradient(linear, left bottom, left top, color-stop(0, ' + maxColor + '), color-stop(1, ' + minColor + '))' :
                        'gradient(linear, left bottom, left top, color-stop(0, ' + maxColor + '), color-stop(' + (midGradientPosition / 100) + ', ' + midColor + '), color-stop(1, ' + minColor + '))';

                    // Create a CSS3 gradient between the min and max values.
                    gaugeLegend.css({
                        'background-image': linearGradientCss,
                        'background-image': '-webkit-' + linearGradientCss,
                        'background-image': '-webkit-' + gradientCss
                    });

                    // Add an event handler to the chart's 'onmouseover' event.
                    google.visualization.events.addListener(chart.getChart(), 'onmouseover', function (e) {
                        var value, formattedValue, position, cssConfig;

                        // Get the heatmap value for the selected row.
                        value = dataTable.getValue(e.row, 2);
                        formattedValue = dataTable.getFormattedValue(e.row, 2);

                        // Calculate the percentage position of the value to display on the gauge.
                        position = 100 * ((value - min) / (max - min));

                        // Create a CSS object to pass to the span. We modify the position
                        // slightly to allow our span styling to better point at the gauge.
                        cssConfig = { 'display': 'block', 'top': (position - 2.5) + '%' };

                        // Find the chart legend, then its gaugeLegendSelectedValue, then add the heatmap
                        // value that's been selected, as well as displaying the value in the correct place.
                        gaugeLegend.find('span.gaugeLegendSelectedValue').html(formattedValue).css(cssConfig);
                    });

                    // Add an event handler to the chart's 'onmouseout' event.
                    google.visualization.events.addListener(chart.getChart(), 'onmouseout', function (e) {
                        // Hide any heatmap values that are currently on display.
                        gaugeLegend.find('span.gaugeLegendSelectedValue').css('display', 'none');
                    });

                });
            }

            // Set the data table for the chart.
            chart.setDataTable(dataTable);

            // Draw the chart.
            chart.draw();
        }

        // Attempt to load the data.
        // NOTE: The dataType is set to 'text' rather than 'json' to stop Zepto
        // attempting to parse dates which the Google Visualization API expects 
        // to parse itself, causing an error.
        ajaxManager.post(url, params, onDataLoaded, 'text');
    }

    chartBase.create = create;
    chartBase.load = load;

    return chartBase;
});