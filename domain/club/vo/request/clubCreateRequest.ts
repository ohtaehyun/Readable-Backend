export class ClubCreateRequest {
    readonly name: string;
    readonly description: string;
    readonly category: string;

    constructor(params: {name: string, description: string, category: string}) {
        this.name = params.name;
        this.description = params.description;
        this.category = params.category;

        this.validate();
    }

    private validate() {
        
    }
}