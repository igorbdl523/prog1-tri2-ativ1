class Item {
    constructor(public title: string) { }
}

class todolist {
    private items: Item[] = [];
    private filePath: string;
    constructor(filePath: string) {
        this.filePath = filePath;
    }
    addItem(item: Item) {
        this.items.push(item);
    }
    removeItem(index: number) {
        this.items.splice(index, 1);
    }
    getItens(): Item[] {
        return this.items
    }
}

