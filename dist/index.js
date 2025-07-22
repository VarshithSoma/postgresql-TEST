"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "../.env" });
const client = new pg_1.Client({
    connectionString: process.env.POSTGRESQL_URL,
});
// console.log(process.env.POSTGRESQL_URL);
client.connect();
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        // await client.connect();
        const res = yield client.query(`
    CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`);
        console.log(res);
    });
}
// createUserTable();
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // await client.connect();
            const query = "insert into users (email,username,password) values ($1,$2,$3);";
            const values = [username, email, password];
            const res = yield client.query(query, values);
            console.log("Insertion successful:", res);
        }
        catch (err) {
            console.log(err);
        }
    });
}
// insertData("username1", "test1@gmail.com", "password");
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // await client.connect();
            const query = "SELECT * FROM users";
            const res = yield client.query(query);
            console.log("data successful:", res.rows);
        }
        catch (err) {
            console.log(err);
        }
    });
}
// getData();
function getByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = "SELECT * FROM users where email=$1";
            const values = [email];
            const res = yield client.query(query, values);
            console.log(res.rows);
        }
        catch (err) {
            console.log(err);
        }
    });
}
getByEmail("varshithkumarsoma@gmail.com");
