/**
 * @summary Creates a new database.
 * @description Creates a new database with given name and given options. If the database doesnt exist it will create a new one.
 * @return {Object} Database.
 * @param {string} name - Database name.
 * @param {Object} options - Database options.
 */
class Database {
    constructor(name, options) {
        this.name = name;
        this.options = options;
    }
    /**
     * @summary Sets a value for a database.
     * @description Set a value for a database using a field name or JSON path.
     * @param {string} location - The location for the value to be set in the database. Can be field name or JSON path.
     * @param {string | Object} value - Value to be set at location.
     * @param {Object} [options] -  Options for setting values.
     */
    async set(location, value, options){
        const set = require('./modules/set.js');
        return set(this.name, location, value, options);
    }
    /**
     * @summary Gets a value from a database.
     * @description Get a value from a database using a field name or JSON path.
     * @param {string} location - The location to read from. Can be field name or JSON path.
     * @return {string} Value fetched. If no value is present it will return undefined
     */
    async get(location){
        const get = require('./modules/get.js');
        return get(this.name, location);
    }
    /**
     * @summary Destroys database file.
     * @description Removes the JSON file associated with this database.
     */
    async destroy(){
        const destroy = require('./modules/destroy.js');
        return destroy(this.name);
    }
    async delete(location){
        const deleteField = require('./modules/delete.js');
        deleteField(this.name, location);
    }
}

exports.Database = Database;