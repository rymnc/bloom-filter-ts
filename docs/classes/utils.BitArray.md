[bloom-filter-ts](../README.md) / [Modules](../modules.md) / [utils](../modules/utils.md) / BitArray

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

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Defined in

[utils.ts:13](https://github.com/rymnc/bloom-filter-ts/blob/d7c97cf/lib/utils.ts#L13)

## Properties

### size

• **size**: `number`

#### Defined in

[utils.ts:7](https://github.com/rymnc/bloom-filter-ts/blob/d7c97cf/lib/utils.ts#L7)

___

### vector

• **vector**: `Uint32Array`

#### Defined in

[utils.ts:6](https://github.com/rymnc/bloom-filter-ts/blob/d7c97cf/lib/utils.ts#L6)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[utils.ts:49](https://github.com/rymnc/bloom-filter-ts/blob/d7c97cf/lib/utils.ts#L49)

## Methods

### clear

▸ **clear**(`index`): `void`

Clear the bit at the index

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[utils.ts:32](https://github.com/rymnc/bloom-filter-ts/blob/d7c97cf/lib/utils.ts#L32)

___

### get

▸ **get**(`index`): `boolean`

Get the bit at the index

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`boolean`

boolean

#### Defined in

[utils.ts:43](https://github.com/rymnc/bloom-filter-ts/blob/d7c97cf/lib/utils.ts#L43)

___

### set

▸ **set**(`index`): `void`

Set a bit at the index

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[utils.ts:22](https://github.com/rymnc/bloom-filter-ts/blob/d7c97cf/lib/utils.ts#L22)
