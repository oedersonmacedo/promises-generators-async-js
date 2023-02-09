import Database from './database.mjs';

(async function () {
    let database = new Database();

    await database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    await Promise.all([
        database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)"),
        database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)"),
        database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)")
    ]);
    const resultSelect = await database.execute("select name, age from author");

    console.log(JSON.stringify(resultSelect, undefined,"   "));
})();

