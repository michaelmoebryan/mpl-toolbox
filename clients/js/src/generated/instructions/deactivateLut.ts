/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  checkForIsWritableOverride as isWritable,
  mapSerializer,
} from '@metaplex-foundation/umi';

// Accounts.
export type DeactivateLutInstructionAccounts = {
  address: PublicKey;
  authority?: Signer;
};

// Arguments.
export type DeactivateLutInstructionData = { discriminator: number };

export type DeactivateLutInstructionDataArgs = {};

export function getDeactivateLutInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<DeactivateLutInstructionDataArgs, DeactivateLutInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    DeactivateLutInstructionDataArgs,
    DeactivateLutInstructionData,
    DeactivateLutInstructionData
  >(
    s.struct<DeactivateLutInstructionData>([['discriminator', s.u32()]], {
      description: 'DeactivateLutInstructionData',
    }),
    (value) => ({ ...value, discriminator: 3 } as DeactivateLutInstructionData)
  ) as Serializer<
    DeactivateLutInstructionDataArgs,
    DeactivateLutInstructionData
  >;
}

// Instruction.
export function deactivateLut(
  context: Pick<Context, 'serializer' | 'programs' | 'identity'>,
  input: DeactivateLutInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId = context.programs.getPublicKey(
    'splAddressLookupTable',
    'AddressLookupTab1e1111111111111111111111111'
  );

  // Resolved accounts.
  const addressAccount = input.address;
  const authorityAccount = input.authority ?? context.identity;

  // Address.
  keys.push({
    pubkey: addressAccount,
    isSigner: false,
    isWritable: isWritable(addressAccount, true),
  });

  // Authority.
  signers.push(authorityAccount);
  keys.push({
    pubkey: authorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(authorityAccount, false),
  });

  // Data.
  const data = getDeactivateLutInstructionDataSerializer(context).serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
