"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHashingFunction = exports.generateBloomFilter = exports.BloomFilter = exports.getK = exports.getError = exports.BitArray = void 0;
const decimal_js_1 = __importDefault(require("decimal.js"));
const utils_1 = require("./utils");
Object.defineProperty(exports, "BitArray", { enumerable: true, get: function () { return utils_1.BitArray; } });
Object.defineProperty(exports, "generateHashingFunction", { enumerable: true, get: function () { return utils_1.generateHashingFunction; } });
Object.defineProperty(exports, "getError", { enumerable: true, get: function () { return utils_1.getError; } });
Object.defineProperty(exports, "getK", { enumerable: true, get: function () { return utils_1.getK; } });
class BloomFilter {
    constructor(m, n, permittedError = new decimal_js_1.default(0.015), hashingFunctions) {
        Object.defineProperty(this, "k", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "m", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "n", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bitArray", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hashingFunctions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.m = m;
        this.n = n;
        this.k = utils_1.getK(m, n);
        const error = utils_1.getError(this.k, m, n);
        if (error.gt(permittedError))
            throw new Error(`Permitted error: ${permittedError.toString()}, found error: ${error.toString()}`);
        this.bitArray = new utils_1.BitArray(m);
        if (hashingFunctions.length > this.k) {
            throw new Error("Too many hashing functions");
        }
        this.hashingFunctions = hashingFunctions;
    }
    add(value) {
        for (const hf of this.hashingFunctions) {
            const id = hf.hash(value);
            this.bitArray.set(id);
        }
    }
    exists(value) {
        let exists = true;
        for (const hf of this.hashingFunctions) {
            const id = hf.hash(value);
            if (!this.bitArray.get(id)) {
                exists = false;
            }
        }
        return exists;
    }
}
exports.BloomFilter = BloomFilter;
function generateBloomFilter(n, permittedError, step = 1) {
    const { k, m } = utils_1.getKandM(n, permittedError, step);
    const hashingFunctions = [];
    for (let i = 0; i < k; i++) {
        hashingFunctions.push(utils_1.generateHashingFunction());
    }
    return new BloomFilter(m, n, permittedError, hashingFunctions);
}
exports.generateBloomFilter = generateBloomFilter;
