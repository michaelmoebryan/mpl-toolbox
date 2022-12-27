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
  Signer,
  WrappedInstruction,
  getProgramAddressWithFallback,
} from '@lorisleiva/js-core';

// Accounts.
export type WrapInstructionAccounts = {
  candyGuard: PublicKey;
  authority: Signer;
  candyMachine: PublicKey;
  candyMachineProgram: PublicKey;
  candyMachineAuthority: Signer;
};

// Instruction.
export function wrap(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: WrapInstructionAccounts
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'mplCandyGuard',
    'Guard1JwRhJkVH6XZhzoYxeBVQe872VH6QggF4BWmS9g'
  );

  // Candy Guard.
  keys.push({ pubkey: input.candyGuard, isSigner: false, isWritable: false });

  // Authority.
  signers.push(input.authority);
  keys.push({
    pubkey: input.authority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Candy Machine.
  keys.push({ pubkey: input.candyMachine, isSigner: false, isWritable: false });

  // Candy Machine Program.
  keys.push({
    pubkey: input.candyMachineProgram,
    isSigner: false,
    isWritable: false,
  });

  // Candy Machine Authority.
  signers.push(input.candyMachineAuthority);
  keys.push({
    pubkey: input.candyMachineAuthority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Data.
  const data = new Uint8Array();

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
