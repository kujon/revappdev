﻿// ------------------------------------------
// HELPER
// ------------------------------------------

WebAppLoader.addModule({ name: 'helper', isPlugin: true }, function () {
    var helper = {};

    // ------------------------------------------
    // STRING FUNCTIONS
    // ------------------------------------------

    function capitaliseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function startsWith(str, prefix) {
        return str.indexOf(prefix) === 0;
    }

    function endsWith(str, suffix) {
        return str.match(suffix + "$") == suffix;
    }

    // ------------------------------------------
    // DATA TYPE FUNCTIONS
    // ------------------------------------------

    function getValueAs(value, type) {
        function getValue(exp, type, defaultValue) {
            return (typeof exp === type) ? exp : defaultValue;
        }

        function getValueAsArray(exp, defaultValue) {
            return (Array.isArray(exp)) ? exp : defaultValue;
        }

        switch (type) {
            case 'boolean':
                return getValue(value, 'boolean', false);
            case 'b':
                return getValue(value, 'boolean', false);
            case 'string':
                return getValue(value, 'string', '');
            case 's':
                return getValue(value, 'string', '');
            case 'number':
                return getValue(value, 'number', 0);
            case 'n':
                return getValue(value, 'number', 0);
            case 'object':
                return getValue(value, 'object', {});
            case 'o':
                return getValue(value, 'object', {});
            case 'array':
                return getValueAsArray(value, []);
            case 'a':
                return getValueAsArray(value, []);
            default:
                return value;
        }
    }

    // Public
    function getType(value) {
        var TYPES = {
            'undefined'        : 'undefined',
            'number'           : 'number',
            'boolean'          : 'boolean',
            'string'           : 'string',
            '[object Function]': 'function',
            '[object RegExp]'  : 'regexp',
            '[object Array]'   : 'array',
            '[object Date]'    : 'date',
            '[object Error]'   : 'error'
        },
        TOSTRING = Object.prototype.toString;

        function type(o) {
            return TYPES[typeof o] || TYPES[TOSTRING.call(o)] || (o ? 'object' : 'null');
        }; 
        
        return type(value);      
    }

    // Public
    function hasValue(value) {
        return (value != undefined && value != null);
    }

    // ------------------------------------------
    // GENERIC FUNCTIONS
    // ------------------------------------------

    // ...

    helper.capitaliseFirstLetter = capitaliseFirstLetter;
    helper.getValueAs = getValueAs;
    helper.startsWith = startsWith;
    helper.endsWith = endsWith;
    helper.getType = getType;
    helper.hasValue = hasValue;

    return helper;
});