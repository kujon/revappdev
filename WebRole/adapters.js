// ------------------------------------------
// DATA ADAPTERS
// ------------------------------------------

// Object definitions and functions to assist in the transformation of service data
// into a JSON-formatted shape for consumption by various application components.

// ------------------------------------------
// MEASURE PLACEHOLDER REPLACEMENT FUNCTION
// ------------------------------------------

function getMeasureName(measureId, analysis, language) {
    var name,
        frequency,
        subPeriodPlaceholder = '[SUBPERIOD]',
        subPeriodsPlaceholder = '[SUBPERIODS]',
        currencyPlaceholder = '[CUR]';

    // Get the localised version of the statistics frequency.
    frequency = language.shared[analysis.statisticsFrequency];

    // Get the localised version of the measure name.
    name = language.measures[measureId];

    // Replace any placeholders.
    name = name.replace(subPeriodPlaceholder, frequency)
               .replace(subPeriodsPlaceholder, frequency)
               .replace(currencyPlaceholder, analysis.currency);

    return name;
}

// ------------------------------------------
// DATA COLUMN FUNCTIONS
// ------------------------------------------

function addColumn(columnArray, name) {
    columnArray.push({ label: name, type: 'number' });
}

function addMeasureColumns(columnArray, measures, analysis, language) {
    var i, len, measureId, measureName;

    // If we're adding measures...
    if (measures) {

        // ...create a column for each one.
        len = measures.length;

        for (i = 0; i < len; i++) {

            // Obtain the measure ID.
            measureId = measures[i];
            // Get the localised measure name.
            measureName = getMeasureName(measureId, analysis, language);

            // If we're making a bubble chart...
            if (this.isBubbleChart) {

                // ...we need to be specific about the columns; 
                // their order, type and their labels.
                switch (i) {
                    case 0:
                        columnArray.push({ label: measureName, type: 'number' });
                        break;
                    case 1:
                        columnArray.push({ label: measureName, type: 'number' });
                        break;
                    case 2:
                        columnArray.push({ label: 'Name', type: 'string' });
                        columnArray.push({ label: measureName, type: 'number' });
                        break;
                }

            } else {
                // Add the column.
                this.addColumn(columnArray, measureName);
            }
        }

    }
}

// ------------------------------------------
// DATA ROW FUNCTIONS
// ------------------------------------------

function addRow(rowArray, segment) {
    var i,
        measures = segment.measures[0].measures,
        len = measures.length,
        cells = [{ v: segment.name}];

    for (i = 0; i < len; i++) {
        cells.push({ v: measures[i].val });
    }

    rowArray.push({ c: cells });
}

function addBubbleChartRow(rowArray, segment) {
    rowArray.push({
        c: [
            { v: '' }, // Empty string to prevent label displaying over bubble.
            { v: segment.measures[0].measures[0].val },
            { v: segment.measures[0].measures[1].val },
            { v: segment.name },
            { v: segment.measures[0].measures[2].val }
        ]
    });
}

function addTreeMapRow(rowArray, nodeName, parentName, sizeValue, colorValue, classifierName) {

    function generateUniqueNodeName(name) {
        var i, len = rowArray.length, exists = false;

        // Check that the nodeName does not already exist in the collection.
        for (i = 0; i < len; i++) {
            if (rowArray[i].c[0].v === name) {
                exists = true;
                break;
            }
        }

        // If the name exists...
        if (exists) {
            // ...try and generate another recursively, appended with a 
            // space. This is so we can appear to display multiple rows 
            // with the same name, but have unique IDs from the perspective 
            // of the Google Visualization API.
            return generateUniqueNodeName(name + ' ');
        } else {
            return name;
        }
    }

    rowArray.push({
        c: [
            { v: generateUniqueNodeName(nodeName) },
            { v: parentName },
            { v: sizeValue },
            { v: colorValue }
        ]
    });
}

function addLineChartRow(rowArray, dataPoint, seriesType) {
    var i,
        dateParts, year, month, day,
        measures = dataPoint.m,
        len = measures.length,
        isCumulative = (seriesType !== 'raw'),
        cells = [];

    dateParts = isCumulative ? dataPoint.d.split('-') : dataPoint.s.split('-');

    year = parseInt(dateParts[0], 10);
    month = parseInt(dateParts[1], 10) - 1;
    day = parseInt(dateParts[2], 10);

    cells.push({ v: 'Date(' + year + ', ' + month + ', ' + day + ')' });

    for (i = 0; i < len; i++) {
        cells.push({ v: measures[i] });
    }

    rowArray.push({ c: cells });
}

function addSegmentRows(rowArray, segments) {
    var i,
        len = segments.length,
        segment;

    // Loop around the segments or securities, adding rows if they are defined.
    for (i = 0; i < len; i++) {
        segment = segments[i];
        if (segment) {
            this.addRow(rowArray, segment);
        }
    }
}

function addSeriesRows(rowArray, series, seriesType) {
    var i,
        len = series.length,
        seriesPoint;

    // Loop around the series, adding rows if they are defined.
    for (i = 0; i < len; i++) {
        seriesPoint = series[i];
        if (seriesPoint) {
            addLineChartRow(rowArray, seriesPoint, seriesType);
        }
    }
}

function addMeasureRows(rowArray, measures, analysis, language) {
    var i, len, measure;

    // ...create a column for each measure.
    len = measures.length;

    for (i = 0; i < len; i++) {
        // Obtain the measure.
        measure = measures[i];
        // Add the row to the array.        
        rowArray.push({
            c: [
                { v: getMeasureName(measure.id, analysis, language) },
                { v: measure.val }
            ]
        });
    }
}

// ------------------------------------------
// DATA CONVERSION FUNCTIONS
// ------------------------------------------

function convert(node, includeMeasuresFor, analysis, measures, language) {
    var columnArray = [],
        rowArray = [],
        segment = null, 
        childSegments = null, 
        securities = null,
        children,
        returnObj;

    // Define an empty object to be returned.
    returnObj = {
        cols: [],
        rows: []
    };

    // Given the node, attempt to get the total level segment, child segments or securities.
    segment = node['segment'];
    childSegments = node['childSegments'];
    securities = node['securities'];

    // If we've got none of these, return the empty return object.
    if (!segment && !childSegments && !securities) {
        return returnObj;
    }

    // If the only data to include string is 'segment',
    // we know we're just getting top level data.
    if ((includeMeasuresFor.length === 1) && (includeMeasuresFor.indexOf('segment') !== -1)) {

        if (this.addMeasureRows) {
            this.addColumn(columnArray, segment.name);
            this.addMeasureRows(rowArray, segment.measures[0].measures, analysis, language);
        } else {
            if (this.addMeasureColumns) {
                this.addMeasureColumns(columnArray, measures, analysis, language);
            }
            this.addRow(rowArray, segment);
        }

    } else {
        
        if (this.addMeasureColumns) {
            this.addMeasureColumns(columnArray, measures, analysis, language);
        }

        // If we've got the total level to add here...
        if ((includeMeasuresFor.indexOf('segment') !== -1) && segment) {
            // ...add the row.
            this.addRow(rowArray, segment);
        }

        // Retrieve the segments or securities from the relevant 'included data' property.
        if ((includeMeasuresFor.indexOf('childSegments') !== -1) && childSegments) {            
            children = childSegments.segments;
        } else if ((includeMeasuresFor.indexOf('securities') !== -1) && securities) {        
            children = securities.securities;
        } else {            
            // We've found neither child segments or securities, so something
            // has gone wrong. Return the empty return object.
            return returnObj;
        }
        
        this.addSegmentRows(rowArray, children);
    }

    // Assign the columns and rows to our return object.
    returnObj.cols = this.columns.concat(columnArray);
    returnObj.rows = rowArray;

    // Return the object required by the Google Visualization API.
    return returnObj;
}

function lineChartConvert(dataPoints, seriesType, analysis, measures, language) {
    var columnArray = [],
        rowArray = [];

    if (this.addMeasureColumns) {
        this.addMeasureColumns(columnArray, measures, analysis, language);
    }
    addSeriesRows(rowArray, dataPoints.items, seriesType);

    // Return the object required by the Google Visualization API.
    return {
        cols: this.columns.concat(columnArray),
        rows: rowArray
    };
}

function treeMapConvert(node, includeMeasuresFor, analysis) {
    var i,
        len,
        segment = null, 
        childSegments = null, 
        securities = null,
        children,
        child,
        measures,
        isSecurityLevel = (includeMeasuresFor.indexOf('securities') !== -1),
        classifierName = '',
        rowArray = [],
        returnObj;

    // Define an empty object to be returned.
    returnObj = {
        cols: [],
        rows: []
    };

    // Given the node, attempt to get the total level segment, child segments or securities.
    segment = node['segment'];
    childSegments = node['childSegments'];
    securities = node['securities'];

    // If we've got none of these, return an empty object.
    if (!segment && !childSegments && !securities) {
        return returnObj;
    }

    // Add the root node.
    this.addRow(rowArray, segment.name, null, 0, 0);

    // Retrieve the segments or securities from the relevant 'included data' property.
    if (isSecurityLevel && securities) {            
        children = securities.securities;
    } else if (childSegments) {
        children = childSegments.segments;
        classifierName = childSegments.classifier.name;
    } else {            
        // We've found neither child segments or securities, so something
        // has gone wrong. Return the empty return object.
        return returnObj;
    }

    // Determine the number of child segments.
    len = children.length;

    // Loop around the segments, extracting names and measures for each row.
    for (i = 0; i < len; i++) {
        child = children[i];
        measures = child.measures[0].measures;
        this.addRow(rowArray, child.name, segment.name, measures[0].val, measures[1].val, classifierName);
    }

    // Assign the columns and rows to our return object.
    returnObj.cols = this.columns;
    returnObj.rows = rowArray;

    // Return the object required by the Google Visualization API.
    return returnObj;
}

// ------------------------------------------
// COMMON ADAPTER OBJECTS
// ------------------------------------------

var i,
    charts = [
        'AreaChart',
        'BarChart',
        'BubbleChart',
        'ColumnChart',
        'CustomNumber',
        'LineChart',
        'PieChart',
        'ScatterChart',
        'SteppedAreaChart',
        'Table',
        'TreeMap'
    ];

for (i = 0; i < charts.length; i++) {
    exports[charts[i]] = {
        addColumn: addColumn,
        addMeasureColumns: addMeasureColumns,
        addRow: addRow,
        addSegmentRows: addSegmentRows,
        convert: convert,
        columns: [{ label: '', type: 'string'}]
    };
}

// ------------------------------------------
// SPECIALIST ADAPTER OVERRIDES
// ------------------------------------------

// Table
exports.Table.addMeasureRows = addMeasureRows;

// Bubble Chart
exports.BubbleChart.addRow = addBubbleChartRow;
exports.BubbleChart.isBubbleChart = true;

// Tree Map
exports.TreeMap.addRow = addTreeMapRow;
exports.TreeMap.convert = treeMapConvert;
exports.TreeMap.columns = [
	{ label: 'Name', type: 'string' },
	{ label: 'Parent Name', type: 'string' },
	{ label: 'Size', type: 'number' },
	{ label: 'Color', type: 'number' }
];

// Line Chart
exports.LineChart.convert = lineChartConvert;
exports.LineChart.columns = [{ label: 'Date', type: 'date'}];