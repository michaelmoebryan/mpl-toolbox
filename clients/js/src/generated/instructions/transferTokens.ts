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
} from '@metaplex-foundation/umi-core';

// Accounts.
export type TransferTokensInstructionAccounts = {
  source: PublicKey;
  destination: PublicKey;
  authority?: Signer;
};

// Arguments.
export type TransferTokensInstructionData = {
  discriminator: number;
  amount: bigint;
};

export type TransferTokensInstructionArgs = { amount: number | bigint };

export function getTransferTokensInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<TransferTokensInstructionArgs, TransferTokensInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    TransferTokensInstructionArgs,
    TransferTokensInstructionData,
    TransferTokensInstructionData
  >(
    s.struct<TransferTokensInstructionData>(
      [
        ['discriminator', s.u8],
        ['amount', s.u64],
      ],
      'TransferTokensInstructionArgs'
    ),
    (value) => ({ ...value, discriminator: 3 } as TransferTokensInstructionData)
  ) as Serializer<TransferTokensInstructionArgs, TransferTokensInstructionData>;
}

// Instruction.
export function transferTokens(
  context: Pick<Context, 'serializer' | 'programs' | 'identity'>,
  input: TransferTokensInstructionAccounts & TransferTokensInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('splToken').publicKey;

  // Resolved accounts.
  const sourceAccount = input.source;
  const destinationAccount = input.destination;
  const authorityAccount = input.authority ?? context.identity;

  // Source.
  keys.push({
    pubkey: sourceAccount,
    isSigner: false,
    isWritable: isWritable(sourceAccount, true),
  });

  // Destination.
  keys.push({
    pubkey: destinationAccount,
    isSigner: false,
    isWritable: isWritable(destinationAccount, true),
  });

  // Authority.
  signers.push(authorityAccount);
  keys.push({
    pubkey: authorityAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(authorityAccount, false),
  });

  // Data.
  const data =
    getTransferTokensInstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
