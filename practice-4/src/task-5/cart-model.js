import Subject from "./subject.js";
import { status } from "../task-1.js";

export default class Cart {
    constructor() {
        this.baseUrl = "http://localhost:3001/cart/items/";
        this.subject = new Subject();
        this.items = [];
        this.loading = false;
    }

    _ajax(url, method = "GET", data = null, middleware = () => {}) {
        const params = {
            method,
            mode: "cors",
            headers: { "Content-type": "application/json" }
        };
        if (data) {
            params.body = JSON.stringify(data);
        }

        this.loading = true;
        this._notify();

        return window
            .fetch(url, params)
            .then(status)
            .then(response => (response.status === 200 ? response.json() : null))
            .then(() => {
                this.loading = false;
                this._notify();
            });
    }

    _notify() {
        this.subject.notifyObservers();
    }

    register(...args) {
        this.subject.add(...args);
    }

    getItems() {
        return this.items;
    }

    getTotalQuantity() {
        return this.items.length;
    }

    getTotalPrice() {
        return this.item.length !== 0
            ? this.items.map(item => item.price).reduce((sum, el) => sum + el, 0)
            : 0;
    }

    load() {
        return this._ajax(this.baseUrl, "GET", null, data => {
            this.items = data;
        });
    }

    addItem(item) {
        return this._ajax(this.baseUrl, "POST", item, () => {
            this.items.push(item);
        });
    }

    updateItem(itemId, item) {
        return this._ajax(`${this.baseUrl}${itemId}`, "PUT", item, () => {
            this.items.map(el => {
                if (el.id === itemId) {
                    this.el.name = item.name;
                    this.el.price = item.price;
                    this.el.quantity = item.quantity;
                }
            });
        });
    }

    removeItem(itemId) {
        return this._ajax(`${this.baseUrl}${itemId}`, "DELETE", null, () => {
            this.items.splice(itemId, 1);
        });
    }

    removeAll() {
        return this._ajax(this.baseUrl, "DELETE", null, () => {
            this.items = [];
        });
    }
}


// { "id": 1, "name": "Item 1", "price": 15, "quantity": 10 }
