[bloom-filter](../README.md) / [Modules](../modules.md) / [utils](../modules/utils.md) / BitArray

# Class: BitArray

[utils](../modules/utils.md).BitArray

## Table of contents

### Constructors

- [constructor](utils.BitArray.md#constructor)

### Properties

- [size](utils.BitArray.md#size)
- [vector](utils.BitArray.md#vector)

### Accessors

- [length](utils.BitArray.md#length)

### Methods

- [clear](utils.BitArray.md#clear)
- [get](utils.BitArray.md#get)
- [set](utils.BitArray.md#set)

## Constructors

### constructor

• **new BitArray**(`size`)

Constructor

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `size` | `number` |

#### Defined in

[utils.ts:11](https://github.com/rymnc/bloom-filter-ts/blob/e84853a/lib/utils.ts#L11)

## Properties

### size

• **size**: `number`

#### Defined in

[utils.ts:5](https://github.com/rymnc/bloom-filter-ts/blob/e84853a/lib/utils.ts#L5)

---

### vector

• **vector**: `Uint32Array`

#### Defined in

[utils.ts:4](https://github.com/rymnc/bloom-filter-ts/blob/e84853a/lib/utils.ts#L4)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[utils.ts:47](https://github.com/rymnc/bloom-filter-ts/blob/e84853a/lib/utils.ts#L47)

## Methods

### clear

▸ **clear**(`index`): `void`

Clear the bit at the index

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[utils.ts:30](https://github.com/rymnc/bloom-filter-ts/blob/e84853a/lib/utils.ts#L30)

---

### get

▸ **get**(`index`): `boolean`

Get the bit at the index

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `index` | `number` |

#### Returns

`boolean`

boolean

#### Defined in

[utils.ts:41](https://github.com/rymnc/bloom-filter-ts/blob/e84853a/lib/utils.ts#L41)

---

### set

▸ **set**(`index`): `void`

Set a bit at the index

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[utils.ts:20](https://github.com/rymnc/bloom-filter-ts/blob/e84853a/lib/utils.ts#L20)
