class TodoModel {
    position: number;
    information: string;
    isChecked: boolean;

    constructor(information: string, position: number) {
        this.information = information;
        this.position = position;
        this.isChecked = false;
    }
}

export { TodoModel };