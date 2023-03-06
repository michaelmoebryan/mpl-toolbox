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
export type ExtendLutInstructionAccounts = {
  address: PublicKey;
  authority?: Signer;
  payer?: Signer;
  systemProgram?: PublicKey;
};

// Arguments.
export type ExtendLutInstructionData = {
  discriminator: number;
  addresses: Array<PublicKey>;
};

export type ExtendLutInstructionDataArgs = { addresses: Array<PublicKey> };

export function getExtendLutInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<ExtendLutInstructionDataArgs, ExtendLutInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    ExtendLutInstructionDataArgs,
    ExtendLutInstructionData,
    ExtendLutInstructionData
  >(
    s.struct<ExtendLutInstructionData>(
      [
        ['discriminator', s.u32()],
        ['addresses', s.array(s.publicKey(), { size: s.u64() })],
      ],
      { description: 'ExtendLutInstructionData' }
    ),
    (value) => ({ ...value, discriminator: 2 } as ExtendLutInstructionData)
  ) as Serializer<ExtendLutInstructionDataArgs, ExtendLutInstructionData>;
}

// Instruction.
export function extendLut(
  context: Pick<Context, 'serializer' | 'programs' | 'identity' | 'payer'>,
  input: ExtendLutInstructionAccounts & ExtendLutInstructionDataArgs
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
  const payerAccount = input.payer ?? context.payer;
  const systemProgramAccount = input.systemProgram ?? {
    ...context.programs.getPublicKey(
      'splSystem',
      '11111111111111111111111111111111'
    ),
    isWritable: false,
  };

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

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, true),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Data.
  const data = getExtendLutInstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}