[bloom-filter](../README.md) / [Modules](../modules.md) / [sdk](../modules/sdk.md) / BloomFilter

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
| `hashingFunctions` | [`HashingFunctions`](../interfaces/types.HashingFunctions.md)<`Type`\>[] |

#### Defined in

[sdk.ts:12](https://github.com/rymnc/bloom-filter-ts/blob/dfdd230/lib/sdk.ts#L12)

## Properties

### bitArray

• **bitArray**: [`BitArray`](utils.BitArray.md)

#### Defined in

[sdk.ts:9](https://github.com/rymnc/bloom-filter-ts/blob/dfdd230/lib/sdk.ts#L9)

___

### hashingFunctions

• **hashingFunctions**: [`HashingFunctions`](../interfaces/types.HashingFunctions.md)<`Type`\>[]

#### Defined in

[sdk.ts:10](https://github.com/rymnc/bloom-filter-ts/blob/dfdd230/lib/sdk.ts#L10)

___

### k

• **k**: `number`

#### Defined in

[sdk.ts:6](https://github.com/rymnc/bloom-filter-ts/blob/dfdd230/lib/sdk.ts#L6)

___

### m

• **m**: `number`

#### Defined in

[sdk.ts:7](https://github.com/rymnc/bloom-filter-ts/blob/dfdd230/lib/sdk.ts#L7)

___

### n

• **n**: `number`

#### Defined in

[sdk.ts:8](https://github.com/rymnc/bloom-filter-ts/blob/dfdd230/lib/sdk.ts#L8)

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

[sdk.ts:33](https://github.com/rymnc/bloom-filter-ts/blob/dfdd230/lib/sdk.ts#L33)

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

[sdk.ts:40](https://github.com/rymnc/bloom-filter-ts/blob/dfdd230/lib/sdk.ts#L40)
