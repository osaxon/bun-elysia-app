import { Elysia } from "elysia";

const __dirName = import.meta.dir;

async function getCats() {
    const data = Bun.file(`${__dirName}/data/cats.json`);
    const cats = await data.json();
    return cats;
}

const app = new Elysia()
    .get("/", () => "Hello Elysia")
    .get("/api", () => {
        console.log(Bun.env.PORT, "<--- port num");
        return {
            message: "api route",
            other: ["param1", "param2"],
            port: Bun.env.PORT || process.env.PORT || null,
            env: Bun.env,
        };
    })
    .get("/api/books/:id", ({ params: { id } }) => {
        return { id };
    })
    .get("/api/cats", () => getCats())
    .listen(process.env.PORT ?? 9090);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
