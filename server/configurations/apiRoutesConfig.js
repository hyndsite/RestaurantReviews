"use strict";

import restaurantRouter             from "../routes/restaurantRoutes";
import authenticationRouter         from "../routes/authenticationRoutes";
import restaurantReviewRouter       from "../routes/restaurantReviewRoutes";
import cors                         from "cors";

export default function ConfigApiRoutes(app) {
    app.use(cors());
    app.use(authenticationRouter);
    app.use(restaurantRouter);
    app.use(restaurantReviewRouter);
}