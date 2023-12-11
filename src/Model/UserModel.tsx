export class UserModel {
    private username: string;
    private name: string;
    private lastName: string;
    
    constructor() {
        this.username = '';
        this.name = '';
        this.lastName = '';
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }
    
}