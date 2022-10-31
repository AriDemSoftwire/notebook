import Workshop from "../models/Trainer";
import pool from "./pool";

export async function getAllWorkshops() {
    try {
        const result = await pool.query(`SELECT * FROM workshop`);
        return result.rows.map((workshop) => new Workshop(workshop));
    } catch (err) {
        throw err;
    }
}
