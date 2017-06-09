import PouchDB from 'pouchdb'

const options = { auth: { username: 'elinhart', password: 'test' } }
const localDB = new PouchDB('mmt-ss2017')
const remoteDB = new PouchDB('https://couchdb.5k20.com/mmt-ss2017', options)

export default class Store {
    /**
     * @param {!string} name Database name
     * @param {function()} [callback] Called when the Store is ready
     */
    constructor(name, callback) {
        /**
         * @type {ItemList}
         */
        let liveTodos

        /**
         * Read the local ItemList from localStorage.
         *
         * @returns {ItemList} Current array of todos
         */
        this.getStore = () => {
            return new Promise((resolve) => {
                localDB.allDocs({
                    include_docs: true,
                    attachments: false
                }).then((result) => {
                    const todos = result.rows.map(row => row.doc)
                    resolve(todos)
                })
            })
        }

        /**
         * Write the local ItemList to localStorage.
         *
         * @param {ItemList} todos Array of todos to write
         */
        this.setStore = (todos) => {
            localDB
            .put({
                _id: 'todos',
                data: todos
            })
        }

        this.sync()

        if (callback) {
            this.getStore()
                .then(() => {
                    callback()
                })
        }
    }

    sync() {
        PouchDB.sync(localDB, remoteDB)
    }

    /**
     * Find items with properties matching those on query.
     *
     * @param {ItemQuery} query Query to match
     * @param {function(ItemList)} callback Called when the query is done
     *
     * @example
     * db.find({completed: true}, data => {
	 *	 // data shall contain items whose completed properties are true
	 * })
     */
    find(query, callback) {
        this.getStore()
        .then((items) =>{
            const filteredItems = items.filter(i => {
                for (let k in query) {
                    return (query[k] !== i[k]) ? false : true
                }
                return true
            })
            callback(filteredItems)
        })
    }

    /**
     * Update an item in the Store.
     *
     * @param {ItemUpdate} update Record with an id and a property to update
     * @param {function()} [callback] Called when partialRecord is applied
     */
    update(update, callback) {
        this.find({ _id: update.id.toString() }, (items) => {
            const item = items[0]
            for (let k in update) {
                item[k] = update[k]
            }
            localDB.put(item).then(callback)
        })
    }

    /**
     * Insert an item into the Store.
     *
     * @param {Item} item Item to insert
     * @param {function()} [callback] Called when item is inserted
     */
    insert(item, callback) {
        // const todos = this.getStore()
        localDB
        .put({
            _id: item.id.toString(),
            id: item.id.toString(),
            title: item.title,
            completed: item.completed,
        }).then(callback())
    }

    /**
     * Remove items from the Store based on a query.
     *
     * @param {ItemQuery} query Query matching the items to remove
     * @param {function(ItemList)|function()} [callback] Called when records matching query are removed
     */
    remove(query, callback) {
        this.getStore()
        .then((items) =>{
            const deleted = items.map(i => Object.assign({}, i, { _deleted: true }))
            localDB.bulkDocs(deleted).then(callback)
        })
    }

    /**
     * Count total, active, and completed todos.
     *
     * @param {function(number, number, number)} callback Called when the count is completed
     */
    count(callback) {
        this.getStore()
        .then((items) =>{
            const all = items.length
            const complete = items.filter(i => i.completed)
            callback(all, all - complete, complete)
        })
    }

}
