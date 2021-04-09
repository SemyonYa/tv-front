export class Fake {
    id: number;
    name: string;
    description?: string;
    qty?: number;
    date?: Date;

    constructor(
        id: number,
        name: string,
        description?: string,
        qty?: number,
        date?: Date,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.qty = qty;
        this.date = date;
    }
}