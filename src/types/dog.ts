export type Dog = {
    id: number;
    name: string;
    age: number;
    likes: Array<string>;
};

export type NewDog = Omit<Dog, "id">;
