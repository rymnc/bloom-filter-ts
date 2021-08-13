[bloom-filter](../README.md) / [Modules](../modules.md) / utils

# Module: utils

## Table of contents

### Classes

- [BitArray](../classes/utils.BitArray.md)

### Functions

- [generateHashingFunction](utils.md#generatehashingfunction)
- [getError](utils.md#geterror)
- [getK](utils.md#getk)

## Functions

### generateHashingFunction

▸ **generateHashingFunction**<`Type`\>(): [`HashingFunction`](../interfaces/types.HashingFunction.md)<`Type`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `string` |

#### Returns

[`HashingFunction`](../interfaces/types.HashingFunction.md)<`Type`\>

#### Defined in

[utils.ts:69](https://github.com/rymnc/bloom-filter-ts/blob/b41eb9f/lib/utils.ts#L69)

___

### getError

▸ **getError**(`k`, `m`, `n`): `Decimal`

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `number` |
| `m` | `number` |
| `n` | `number` |

#### Returns

`Decimal`

#### Defined in

[utils.ts:60](https://github.com/rymnc/bloom-filter-ts/blob/b41eb9f/lib/utils.ts#L60)

___

### getK

▸ **getK**(`m`, `n`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `number` |
| `n` | `number` |

#### Returns

`number`

#### Defined in

[utils.ts:54](https://github.com/rymnc/bloom-filter-ts/blob/b41eb9f/lib/utils.ts#L54)
