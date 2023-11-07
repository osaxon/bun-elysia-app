import { Cat, NewCat } from "../types/cat";
import { appendFile } from "node:fs/promises";

export async function getCats() {
    const data = Bun.file(`src/data/cats.json`);
    try {
        const cats = await data.json();
        return cats;
    } catch (error) {
        throw new Error("failed to load cats");
    }
}

export async function getCatByID(id: string) {
    const cats: Cat[] = await getCats();
    return cats.find((cat) => cat.id === +id);
}

export async function addCat(newCat: NewCat) {
    const cats: Cat[] = await getCats();
    cats.push({ id: Date.now(), ...newCat });
    Bun.write(`src/data/cats.json`, JSON.stringify(cats));
}
