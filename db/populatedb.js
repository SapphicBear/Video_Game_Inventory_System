#! /usr/bin/env node

const { argv } = require("node:process");
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR (255),
    release_date DATE,
    creator VARCHAR (255)
);
`;

async function main(arg) {
    console.log("Seeding database");
    const client = new Client({
        connectionString: arg,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done!")
}

// main(argv[2]);