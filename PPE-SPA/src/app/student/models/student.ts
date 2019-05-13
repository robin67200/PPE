export class Student {
    id: number;

    constructor(
        public name: string,
        public firstName: string,
        public mail: string,
        public section: string,
        public matiere: string,
        public evaluation: string
        ) {
            this.id = 0;
        }

}
