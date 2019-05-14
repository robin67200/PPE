export class User {
    id: number;

    constructor(
        public status: string,
        public age: number,
        public username: string,
        public created: string,
        public lastActive: string,
        ) {
            this.id = 0;
        }

}
