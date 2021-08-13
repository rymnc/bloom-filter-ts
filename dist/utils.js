"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHashingFunction = exports.getError = exports.getKandM = exports.getK = exports.BitArray = void 0;
const decimal_js_1 = require("decimal.js");
const murmurhash2_gc_1 = __importDefault(require("murmurhash-js/murmurhash2_gc"));
class BitArray {
    constructor(size) {
        Object.defineProperty(this, "vector", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.size = size;
        this.vector = new Uint32Array(Math.ceil(size / 32));
    }
    set(index) {
        const bigI = Math.floor(index / 32);
        const smallI = index % 32;
        this.vector[bigI] |= 1 << smallI;
    }
    clear(index) {
        const bigI = Math.floor(index / 32);
        const smallI = index % 32;
        this.vector[bigI] &= ~(1 << smallI);
    }
    get(index) {
        const bigI = Math.floor(index / 32);
        const smallI = index % 32;
        return (this.vector[bigI] & (1 << smallI)) !== 0;
    }
    get length() {
        return this.size;
    }
}
exports.BitArray = BitArray;
function getK(m, n) {
    const decM = new decimal_js_1.Decimal(m);
    const decN = new decimal_js_1.Decimal(n);
    return Math.floor(decM.div(decN).mul(Math.log(2)).toNumber());
}
exports.getK = getK;
function getKandM(n, permittedError, step = 1) {
    for (let m = 1;; m += step) {
        const k = getK(m, n);
        const error = getError(k, m, n);
        if (error.lte(permittedError)) {
            return { k, m };
        }
    }
}
exports.getKandM = getKandM;
function getError(k, m, n) {
    const decM = new decimal_js_1.Decimal(m);
    const decN = new decimal_js_1.Decimal(n);
    const decK = new decimal_js_1.Decimal(k);
    const power = decK.mul(-decN).div(decM);
    const base = new decimal_js_1.Decimal(1).sub(decimal_js_1.Decimal.exp(1).pow(power));
    return decimal_js_1.Decimal.pow(base, decK);
}
exports.getError = getError;
function generateHashingFunction() {
    const random = Math.random() * Math.floor(Math.pow(10, 12));
    return {
        hash: function (v) {
            const d = murmurhash2_gc_1.default(String(v), random);
            return Math.floor(d / Math.pow(10, d.toString().length - 1));
        },
    };
}
exports.generateHashingFunction = generateHashingFunction;
