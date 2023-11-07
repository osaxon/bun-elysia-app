import { Elysia } from "elysia";
import { getCats, getCatByID, addCat } from "../controllers/cats-controller";
import { NewCat } from "../types/cat";

export const catsRoutes = new Elysia({ prefix: "/cats" })
    .get("/", getCats)
    .get("/:id", ({ params: { id } }) => getCatByID(id))
    .post("/", ({ body: newCat }) => addCat(newCat as NewCat));
