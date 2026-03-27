#! /usr/bin/env node

const { argv } = require("node:process");
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS game_consoles (
    console_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100),
    company VARCHAR(100),
    release_year INTERVAL YEAR NOT NULL
);
CREATE TABLE IF NOT EXISTS game_studios (
    studio_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(200),
    year INTERVAL YEAR NOT NULL
);
CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255),
    studio_id INTEGER NOT NULL REFERENCES game_studios(studio_id),
    console_id  INTEGER NOT NULL REFERENCES game_consoles(console_id),
    genre VARCHAR(255),
    release_year INTERVAL YEAR NOT NULL
);
INSERT INTO game_consoles (name, company, release_year)
    VALUES ('Xbox 360', 'Microsoft', '2005');
INSERT INTO game_consoles (name, company, release_year)
    VALUES ('PlayStation 2', 'Sony', '2000');
INSERT INTO game_consoles (name, company, release_year)
    VALUES ('PlayStation', 'Sony', '1994');
INSERT INTO game_consoles (name, company, release_year)
    VALUES ('PlayStation 3', 'Sony', '2006');
INSERT INTO game_consoles (name, company, release_year)
    VALUES ('PC', 'Multiple Companies', '1979');

INSERT INTO game_studios (name, year)
    VALUES ('Valve', '1996');
INSERT INTO game_studios (name, year)
    VALUES ('Obsidian Entertainment', '2003');
INSERT INTO game_studios (name, year)
    VALUES ('Black Isle Studios', '1996');
`;

async function main(arg) {
    console.log("Seeding database");
    const client = new Client({
        connectionString: arg,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done!");
}

main(argv[2]);