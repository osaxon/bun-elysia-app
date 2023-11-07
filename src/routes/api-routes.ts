import { Elysia } from "elysia";
import { NewCat } from "../types/cat";
import {
    getDogByID,
    getDogs,
    getCats,
    getCatByID,
    addCat,
} from "~/controllers";
import { NewDog } from "~/types/dog";

export const catsRoutes = new Elysia({ prefix: "/cats" })
    .get("/", getCats)
    .get("/:id", ({ params: { id } }) => getCatByID(id))
    .post("/", ({ body: newCat }) => addCat(newCat as NewCat));

export const dogsRoutes = new Elysia({ prefix: "/dogs" })
    .get("/", getDogs)
    .get("/:id", ({ params: { id } }) => getDogByID(id))
    .post("/", ({ body: newDog }) => addCat(newDog as NewDog));

export const apiRoutes = new Elysia().use(catsRoutes).use(dogsRoutes);
