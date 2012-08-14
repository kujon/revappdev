﻿// ------------------------------------------
// LOCAL STORAGE MANAGER
// ---------------------    ---------------------

// Configuration
WebAppLoader.addModule({
    name: 'storage',
    plugins: ['helper'],
    isPlugin: true
}, 

// Constructor
function () {
    var storage             = {},
        output              = this.getConsole(),
        helper              = this.getPlugin('helper'),
        revolutionNamespace = 'Revolution',
        usedSpace           = 0;

    // Public
    function getUsedSpace() {
        return JSON.stringify(localStorage).length;
    }

    // Private
    function getNamespacedName(itemName, namespace) {
        var namespacedName = null;

        if (itemName && (typeof itemName === 'string')) {
            namespacedName = (namespace || revolutionNamespace) + helper.capitaliseFirstLetter(itemName);
        }

        return namespacedName;
    }

    // Private
    function setItem(key, value) {
        localStorage.setItem(key, value);
        output.log('Storage - setItem:', key, value);
    }

    // Private
    function getItem(key) {
        return localStorage.getItem(key);
    }

    // Public
    function load(itemName, namespace) {
        var name        = getNamespacedName(itemName, namespace),
            storedItem  = getItem(name),
            value       = null;
        
        // Check if the value exists and try to retrieve it.
        if (storedItem) {
            // Check if the value is a stringified JSON object.
            if (helper.startsWith(storedItem, '{"')) {
                try {
                    value = JSON.parse(storedItem);
                } catch (e) {
                    output.log('Storage - failed to parse stored item:', key, value);
                }
            } else {
                value = storedItem;
            }
        }
        
        return value;    
    }

    // Public
    function save(itemName, itemValue, namespace) {
        var name = getNamespacedName(itemName, namespace),
            value = '';

        if (name && helper.hasValue(itemValue)) {
            value = (typeof itemValue === 'object')
                ? JSON.stringify(itemValue)
                : itemValue;
            
            setItem(name, value);
                        
        } else {
            output.log('Storage - cannot save item.', itemName, itemValue);
        }
    }

    // Public
    function remove(itemName, namespace) {
        var name = getNamespacedName(itemName, namespace);

        if (name) {
            localStorage.removeItem(name);
            output.log('Storage - removed item.', name);
        }
    }

    // Public
    function count() {
        output.log('count()', localStorage.length);
    }

    // Public
    function clearAll() {
        localStorage.clear();  
        output.log('clearAll()');
    }

    storage.load = load;
    storage.save = save;
    storage.remove = remove;
    storage.count = count;
    storage.clearAll = clearAll;
    storage.getUsedSpace = getUsedSpace;

    return storage;
});