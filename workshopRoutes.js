import { Router } from "express";
import * as workshopRepository from "../repositories/workshopRepository";
export const workshops = [
    { id: 1, name: "yoga workshop" },
    { id: 2, name: "pottery workshop" },
];

const workshopRoutes = Router();

workshopRoutes.get("/workshopsoverview/:id", async (req, res) => {
    try {
        const id = req.params;
        //       const workshops = await workshopRepository.getAllWorkshops();

        for (let i in workshops) {
            if (id === workshops[i].id) {
                res.send(workshops[i]);
                return;
            }
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default workshopRoutes;
