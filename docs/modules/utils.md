[bloom-filter-ts](../README.md) / [Modules](../modules.md) / utils

# Module: utils

## Table of contents

### Classes

- [BitArray](../classes/utils.BitArray.md)

### Functions

- [generateHashingFunction](utils.md#generatehashingfunction)
- [getError](utils.md#geterror)
- [getK](utils.md#getk)
- [getKandM](utils.md#getkandm)

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

[utils.ts:83](https://github.com/rymnc/bloom-filter-ts/blob/4146375/lib/utils.ts#L83)

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

[utils.ts:74](https://github.com/rymnc/bloom-filter-ts/blob/4146375/lib/utils.ts#L74)

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

[utils.ts:54](https://github.com/rymnc/bloom-filter-ts/blob/4146375/lib/utils.ts#L54)

___

### getKandM

▸ **getKandM**(`n`, `permittedError`, `step?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `n` | `number` | `undefined` |
| `permittedError` | `Decimal` | `undefined` |
| `step` | `number` | `1` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `k` | `number` |
| `m` | `number` |

#### Defined in

[utils.ts:60](https://github.com/rymnc/bloom-filter-ts/blob/4146375/lib/utils.ts#L60)
