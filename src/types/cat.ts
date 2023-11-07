export type Cat = {
    id: number;
    name: string;
    age: number;
    likes: Array<string>;
};

export type NewCat = Omit<Cat, "id">;
