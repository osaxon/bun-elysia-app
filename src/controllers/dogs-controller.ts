import { Dog, NewDog } from "~/types/dog";

export async function getDogs() {
    const data = Bun.file(`src/data/dogs.json`);
    try {
        const cats = await data.json();
        return cats;
    } catch (error) {
        throw new Error("failed to load dogs");
    }
}

export async function getDogByID(id: string) {
    const cats: Dog[] = await getDogs();
    return cats.find((dog) => dog.id === +id);
}

export async function addDog(newDog: NewDog) {
    const dogs: Dog[] = await getDogs();
    dogs.push({ id: Date.now(), ...newDog });
    try {
        Bun.write(`src/data/dogs.json`, JSON.stringify(dogs));
    } catch (error) {
        throw new Error("failed to create the new dog");
    }
}
