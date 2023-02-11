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
} from '@metaplex-foundation/umi-core';

// Arguments.
export type AddMemoInstructionData = { memo: string };

export function getAddMemoInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<AddMemoInstructionData> {
  const s = context.serializer;
  return s.struct<AddMemoInstructionData>(
    [['memo', s.string()]],
    'AddMemoInstructionArgs'
  );
}

// Instruction.
export function addMemo(
  context: Pick<Context, 'serializer' | 'programs'>,
  input: AddMemoInstructionData
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('splMemo').publicKey;

  // Data.
  const data = getAddMemoInstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}
