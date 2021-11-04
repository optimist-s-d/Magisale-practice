/* eslint-disable consistent-return */
/* eslint-disable default-case */

const NORTH = "north",
    EAST = "east",
    SOUTH = "south",
    WEST = "west";


const directions = [NORTH, EAST, SOUTH, WEST];

class Rover {
    constructor(x = 0, y = 0, direction = NORTH) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        
        if (!directions.includes(this.direction)) {
            throw new TypeError(`Incorrect direction ${direction}`);
        }
        if (!Number.isInteger(this.x) || !Number.isInteger(this.x)) {
            throw new TypeError(`Incorrect arguments ${x} ${y}`);
        }
    }

    left() {
        switch (this.direction) {
            case NORTH:
                this.direction = WEST;
                return this;
            case EAST:
                this.direction = NORTH;
                return this;
            case SOUTH:
                this.direction = EAST;
                return this;
            case WEST:
                this.direction = SOUTH;
                return this;
        }
    }

    right() {
        switch (this.direction) {
            case NORTH:
                this.direction = EAST;
                return this;
            case EAST:
                this.direction = SOUTH;
                return this;
            case SOUTH:
                this.direction = WEST;
                return this;
            case WEST:
                this.direction = NORTH;
                return this;
        }
    }

    move(n) {
        if (!Number.isInteger(n)) {
            throw new TypeError(`Incorrect number ${n}`);
        }
        switch (this.direction) {
            case NORTH:
                this.y += n;
                return this;
            case EAST:
                this.x += n;
                return this;
            case SOUTH:
                this.y -= n;
                return this;
            case WEST:
                this.x -= n;
                return this;
        }
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }

    getDirection() {
        return this.direction;
    }
}

export { NORTH, EAST, SOUTH, WEST, Rover };
