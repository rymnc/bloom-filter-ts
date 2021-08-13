[bloom-filter-ts](../README.md) / [Modules](../modules.md) / [sdk](../modules/sdk.md) / BloomFilter

# Class: BloomFilter<Type\>

[sdk](../modules/sdk.md).BloomFilter

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `string` |

## Table of contents

### Constructors

- [constructor](sdk.BloomFilter.md#constructor)

### Properties

- [bitArray](sdk.BloomFilter.md#bitarray)
- [hashingFunctions](sdk.BloomFilter.md#hashingfunctions)
- [k](sdk.BloomFilter.md#k)
- [m](sdk.BloomFilter.md#m)
- [n](sdk.BloomFilter.md#n)

### Methods

- [add](sdk.BloomFilter.md#add)
- [exists](sdk.BloomFilter.md#exists)

## Constructors

### constructor

• **new BloomFilter**<`Type`\>(`m`, `n`, `permittedError?`, `hashingFunctions`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `number` |
| `n` | `number` |
| `permittedError` | `Decimal` |
| `hashingFunctions` | [`HashingFunction`](../interfaces/types.HashingFunction.md)<`Type`\>[] |

#### Defined in

[sdk.ts:18](https://github.com/rymnc/bloom-filter-ts/blob/dc2bd44/lib/sdk.ts#L18)

## Properties

### bitArray

• **bitArray**: [`BitArray`](utils.BitArray.md)

#### Defined in

[sdk.ts:15](https://github.com/rymnc/bloom-filter-ts/blob/dc2bd44/lib/sdk.ts#L15)

___

### hashingFunctions

• **hashingFunctions**: [`HashingFunction`](../interfaces/types.HashingFunction.md)<`Type`\>[]

#### Defined in

[sdk.ts:16](https://github.com/rymnc/bloom-filter-ts/blob/dc2bd44/lib/sdk.ts#L16)

___

### k

• **k**: `number`

#### Defined in

[sdk.ts:12](https://github.com/rymnc/bloom-filter-ts/blob/dc2bd44/lib/sdk.ts#L12)

___

### m

• **m**: `number`

#### Defined in

[sdk.ts:13](https://github.com/rymnc/bloom-filter-ts/blob/dc2bd44/lib/sdk.ts#L13)

___

### n

• **n**: `number`

#### Defined in

[sdk.ts:14](https://github.com/rymnc/bloom-filter-ts/blob/dc2bd44/lib/sdk.ts#L14)

## Methods

### add

▸ **add**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Type` |

#### Returns

`void`

#### Defined in

[sdk.ts:39](https://github.com/rymnc/bloom-filter-ts/blob/dc2bd44/lib/sdk.ts#L39)

___

### exists

▸ **exists**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Type` |

#### Returns

`boolean`

#### Defined in

[sdk.ts:47](https://github.com/rymnc/bloom-filter-ts/blob/dc2bd44/lib/sdk.ts#L47)
