import pg from "pg";

const { Pool } = pg;

const db = new Pool({
    host: "localhost",
    port: 5432,
    user: "SeuUsuarioPostgres",//User
    password: "suaSenhaPostgres",// Password
    database: "Games"
})

export default db
