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
  publicKey,
} from '@metaplex-foundation/umi-core';

// Accounts.
export type InitializeTokenInstructionAccounts = {
  account: PublicKey;
  mint: PublicKey;
  owner: PublicKey;
  rent?: PublicKey;
};

// Arguments.
export type InitializeTokenInstructionData = { discriminator: number };

export type InitializeTokenInstructionArgs = {};

export function getInitializeTokenInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<InitializeTokenInstructionArgs, InitializeTokenInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    InitializeTokenInstructionArgs,
    InitializeTokenInstructionData,
    InitializeTokenInstructionData
  >(
    s.struct<InitializeTokenInstructionData>(
      [['discriminator', s.u8]],
      'InitializeTokenInstructionArgs'
    ),
    (value) =>
      ({ ...value, discriminator: 1 } as InitializeTokenInstructionData)
  ) as Serializer<
    InitializeTokenInstructionArgs,
    InitializeTokenInstructionData
  >;
}

// Instruction.
export function initializeToken(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: InitializeTokenInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('splToken').publicKey;

  // Resolved accounts.
  const accountAccount = input.account;
  const mintAccount = input.mint;
  const ownerAccount = input.owner;
  const rentAccount =
    input.rent ?? publicKey('SysvarRent111111111111111111111111111111111');

  // Account.
  keys.push({
    pubkey: accountAccount,
    isSigner: false,
    isWritable: isWritable(accountAccount, true),
  });

  // Mint.
  keys.push({
    pubkey: mintAccount,
    isSigner: false,
    isWritable: isWritable(mintAccount, false),
  });

  // Owner.
  keys.push({
    pubkey: ownerAccount,
    isSigner: false,
    isWritable: isWritable(ownerAccount, false),
  });

  // Rent.
  keys.push({
    pubkey: rentAccount,
    isSigner: false,
    isWritable: isWritable(rentAccount, false),
  });

  // Data.
  const data = getInitializeTokenInstructionDataSerializer(context).serialize(
    {}
  );

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
