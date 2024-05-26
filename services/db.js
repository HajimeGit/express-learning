const Sqlite = require('better-sqlite3');
const path = require('path');
const db = new Sqlite(path.resolve(__dirname, '../bot.db'), {
    fileMustExist: true
});

console.log('Database connected');

function query(sql, params) {
    return db.prepare(sql).all(params);
}

function insert(sql, params) {
    return db.prepare(sql).run(params)
}

module.exports = {
    query,
    insert,
}