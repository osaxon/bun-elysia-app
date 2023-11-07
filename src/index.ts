import { Elysia } from "elysia";
import { catsRoutes } from "./routes/cats-routes";

const app = new Elysia();

app.group("/v1", (app) =>
    app.get("/", () => "Using v1").use(catsRoutes)
).listen(process.env.PORT ?? 8080, ({ port }) => {
    console.log(`Listening on port: ${port}`);
});
