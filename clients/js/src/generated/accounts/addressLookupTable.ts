/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Account,
  Context,
  Option,
  Pda,
  PublicKey,
  RpcAccount,
  RpcGetAccountOptions,
  RpcGetAccountsOptions,
  Serializer,
  assertAccountExists,
  deserializeAccount,
  gpaBuilder,
  mapSerializer,
} from '@metaplex-foundation/umi';

export type AddressLookupTable = Account<AddressLookupTableAccountData>;

export type AddressLookupTableAccountData = {
  discriminator: number;
  deactivationSlot: bigint;
  lastExtendedSlot: bigint;
  lastExtendedStartIndex: number;
  authority: Option<PublicKey>;
  padding: number;
  addresses: Array<PublicKey>;
};

export type AddressLookupTableAccountDataArgs = {
  deactivationSlot: number | bigint;
  lastExtendedSlot: number | bigint;
  lastExtendedStartIndex: number;
  authority: Option<PublicKey>;
  addresses: Array<PublicKey>;
};

export function getAddressLookupTableAccountDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  AddressLookupTableAccountDataArgs,
  AddressLookupTableAccountData
> {
  const s = context.serializer;
  return mapSerializer<
    AddressLookupTableAccountDataArgs,
    AddressLookupTableAccountData,
    AddressLookupTableAccountData
  >(
    s.struct<AddressLookupTableAccountData>(
      [
        ['discriminator', s.u32()],
        ['deactivationSlot', s.u64()],
        ['lastExtendedSlot', s.u64()],
        ['lastExtendedStartIndex', s.u8()],
        ['authority', s.option(s.publicKey(), { fixed: true })],
        ['padding', s.u16()],
        ['addresses', s.array(s.publicKey(), { size: 'remainder' })],
      ],
      { description: 'AddressLookupTable' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: 1,
        padding: 0,
      } as AddressLookupTableAccountData)
  ) as Serializer<
    AddressLookupTableAccountDataArgs,
    AddressLookupTableAccountData
  >;
}

export function deserializeAddressLookupTable(
  context: Pick<Context, 'serializer'>,
  rawAccount: RpcAccount
): AddressLookupTable {
  return deserializeAccount(
    rawAccount,
    getAddressLookupTableAccountDataSerializer(context)
  );
}

export async function fetchAddressLookupTable(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<AddressLookupTable> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  assertAccountExists(maybeAccount, 'AddressLookupTable');
  return deserializeAddressLookupTable(context, maybeAccount);
}

export async function safeFetchAddressLookupTable(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKey: PublicKey,
  options?: RpcGetAccountOptions
): Promise<AddressLookupTable | null> {
  const maybeAccount = await context.rpc.getAccount(publicKey, options);
  return maybeAccount.exists
    ? deserializeAddressLookupTable(context, maybeAccount)
    : null;
}

export async function fetchAllAddressLookupTable(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<AddressLookupTable[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts.map((maybeAccount) => {
    assertAccountExists(maybeAccount, 'AddressLookupTable');
    return deserializeAddressLookupTable(context, maybeAccount);
  });
}

export async function safeFetchAllAddressLookupTable(
  context: Pick<Context, 'rpc' | 'serializer'>,
  publicKeys: PublicKey[],
  options?: RpcGetAccountsOptions
): Promise<AddressLookupTable[]> {
  const maybeAccounts = await context.rpc.getAccounts(publicKeys, options);
  return maybeAccounts
    .filter((maybeAccount) => maybeAccount.exists)
    .map((maybeAccount) =>
      deserializeAddressLookupTable(context, maybeAccount as RpcAccount)
    );
}

export function getAddressLookupTableGpaBuilder(
  context: Pick<Context, 'rpc' | 'serializer' | 'programs'>
) {
  const s = context.serializer;
  const programId = context.programs.getPublicKey(
    'splAddressLookupTable',
    'AddressLookupTab1e1111111111111111111111111'
  );
  return gpaBuilder(context, programId)
    .registerFields<{
      discriminator: number;
      deactivationSlot: number | bigint;
      lastExtendedSlot: number | bigint;
      lastExtendedStartIndex: number;
      authority: Option<PublicKey>;
      padding: number;
      addresses: Array<PublicKey>;
    }>({
      discriminator: [0, s.u32()],
      deactivationSlot: [4, s.u64()],
      lastExtendedSlot: [12, s.u64()],
      lastExtendedStartIndex: [20, s.u8()],
      authority: [21, s.option(s.publicKey(), { fixed: true })],
      padding: [54, s.u16()],
      addresses: [56, s.array(s.publicKey(), { size: 'remainder' })],
    })
    .deserializeUsing<AddressLookupTable>((account) =>
      deserializeAddressLookupTable(context, account)
    )
    .whereField('discriminator', 1);
}

export function findAddressLookupTablePda(
  context: Pick<Context, 'eddsa' | 'programs' | 'serializer'>,
  seeds: {
    /** The address of the LUT's authority */
    authority: PublicKey;
    /** The recent slot associated with the LUT */
    recentSlot: number | bigint;
  }
): Pda {
  const s = context.serializer;
  const programId = context.programs.getPublicKey(
    'splAddressLookupTable',
    'AddressLookupTab1e1111111111111111111111111'
  );
  return context.eddsa.findPda(programId, [
    s.publicKey().serialize(seeds.authority),
    s.u64().serialize(seeds.recentSlot),
  ]);
}
