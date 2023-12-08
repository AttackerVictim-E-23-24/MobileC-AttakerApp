export class AccelerationData {
    private acceleration: { x: number, y: number, z: number };
    private start: Date|false;
    private end: Date|false;
    private maxInactivityTime: number;

    constructor() {
        this.acceleration = { x: 0, y: 0, z: 0 };
        this.start = false;
        this.end = false;
        this.maxInactivityTime = 10;
    }

    getAcceleration() { 
        return this.acceleration;
    }

    getStart() {
        return this.start;
    }

    getEnd() {
        return this.end;
    }

    setAcceleration(acceleration: { x: number, y: number, z: number }) {
        this.acceleration = acceleration;
    }

    setStart() {
        this.start = new Date();
    }

    setEnd() {
        this.end = new Date();
    }

    getInactivityTime() {
        if (this.start instanceof Date && this.end instanceof Date) {
            return this.end.getTime() - this.start.getTime();
            
        }
        console.log('No se puede calcular el tiempo de inactividad');
        return 0;
    }

    getMaxInactivityTime() {
        return this.maxInactivityTime;
    }

    setMaxInactivityTime(maxInactivityTime: number) {
        this.maxInactivityTime = maxInactivityTime;
    }

    isMoving() {
        return this.acceleration.x > 0 || this.acceleration.y > 0 || this.acceleration.z > 0;
    }

    isInactive() {
        return this.getInactivityTime() > this.maxInactivityTime;
    }

    

}