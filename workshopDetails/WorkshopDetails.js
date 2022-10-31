import React, { useEffect, useState } from "react";
import "./WorkshopDetails.scss";
import { workshops } from "../../backend/apiRoutes/workshopRoutes.js";

export default function Trainers() {
    const [trainers] = useState(null);

    return (
        <main className="workshop-details-page">
            <h1>Workshop Details</h1>
            {workshops ? (
                <table>
                    <tbody>
                        <tr> </tr>
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );
}
