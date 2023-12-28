export class NetworkModel {
    private status: boolean;
    private timestamp: Date;

    constructor() {
        this.status = false;
        this.timestamp = new Date();
    }

    getStatus() {
        return this.status;
    }

    setStatus(status: boolean) {
        this.status = status;
    }   

    getTimestamp() {
        return this.timestamp;
    }

    setTimestamp() {
        this.timestamp = new Date();
    }
}