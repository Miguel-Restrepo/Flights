
export class CoinModel {
    constructor(id: number, description: string, value: number) {
        this.id = id;
        this.description = description;
        this.value = value;

    }

    id: number = 0;
    description: string = "";
    value: number = 0
}