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
  getProgramAddressWithFallback,
} from '@lorisleiva/js-core';

// Accounts.
export type BurnInstructionAccounts = {
  account: PublicKey;
  mint: PublicKey;
  authority: Signer;
};

// Arguments.
export type BurnInstructionData = { amount: bigint };

export type BurnInstructionArgs = { amount: number | bigint };

export function getBurnInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<BurnInstructionArgs, BurnInstructionData> {
  const s = context.serializer;
  return s.struct<BurnInstructionData>(
    [['amount', s.u64]],
    'burnInstructionArgs'
  ) as Serializer<BurnInstructionArgs, BurnInstructionData>;
}

// Instruction.
export function burn(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: BurnInstructionAccounts & BurnInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'splToken',
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
  );

  // Account.
  keys.push({ pubkey: input.account, isSigner: false, isWritable: false });

  // Mint.
  keys.push({ pubkey: input.mint, isSigner: false, isWritable: false });

  // Authority.
  signers.push(input.authority);
  keys.push({
    pubkey: input.authority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Data.
  const data = getBurnInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}