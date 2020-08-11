

export class Model {
    user;
    items;

    constructor(){
        this.user = "Ezgi";
        this.items = [
            new ToDoItem("Spor", false),
            new ToDoItem("Kahvaltı", false),
            new ToDoItem("Kitap Okumak", true),
            new ToDoItem("Tiyatro", true),

          ];
    }
}

export class ToDoItem{
    description;
    action;

    constructor(description, action){
        this.description = description;
        this.action =action;
    }
}