import { create, get, update, remove } from "../controllers/userControllers.js";
 

const userRoutes = app => {
    app.post("/user", create);
    app.get("/user", get);
    app.put("/user/:id", update);
    app.delete("/user/:id", remove);
};

export default userRoutes;