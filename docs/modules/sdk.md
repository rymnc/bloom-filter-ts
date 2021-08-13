[bloom-filter](../README.md) / [Modules](../modules.md) / sdk

# Module: sdk

## Table of contents

### References

- [BitArray](sdk.md#bitarray)
- [HashingFunction](sdk.md#hashingfunction)
- [generateHashingFunction](sdk.md#generatehashingfunction)
- [getError](sdk.md#geterror)
- [getK](sdk.md#getk)

### Classes

- [BloomFilter](../classes/sdk.BloomFilter.md)

### Functions

- [generateBloomFilter](sdk.md#generatebloomfilter)

## References

### BitArray

Re-exports: [BitArray](../classes/utils.BitArray.md)

___

### HashingFunction

Re-exports: [HashingFunction](../interfaces/types.HashingFunction.md)

___

### generateHashingFunction

Re-exports: [generateHashingFunction](utils.md#generatehashingfunction)

___

### getError

Re-exports: [getError](utils.md#geterror)

___

### getK

Re-exports: [getK](utils.md#getk)

## Functions

### generateBloomFilter

▸ **generateBloomFilter**<`Type`\>(`n`, `permittedError`, `step?`): [`BloomFilter`](../classes/sdk.BloomFilter.md)<`Type`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `string` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `n` | `number` | `undefined` |
| `permittedError` | `Decimal` | `undefined` |
| `step` | `number` | `1` |

#### Returns

[`BloomFilter`](../classes/sdk.BloomFilter.md)<`Type`\>

#### Defined in

[sdk.ts:60](https://github.com/rymnc/bloom-filter-ts/blob/46cf824/lib/sdk.ts#L60)
