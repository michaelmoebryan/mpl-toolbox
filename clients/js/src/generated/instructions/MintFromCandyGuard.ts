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
  Option,
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  getProgramAddressWithFallback,
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type MintFromCandyGuardInstructionAccounts = {
  candyGuard: PublicKey;
  candyMachineProgram: PublicKey;
  candyMachine: PublicKey;
  candyMachineAuthorityPda: PublicKey;
  payer: Signer;
  nftMetadata: PublicKey;
  nftMint: PublicKey;
  nftMintAuthority: Signer;
  nftMasterEdition: PublicKey;
  collectionAuthorityRecord: PublicKey;
  collectionMint: PublicKey;
  collectionMetadata: PublicKey;
  collectionMasterEdition: PublicKey;
  collectionUpdateAuthority: PublicKey;
  tokenMetadataProgram: PublicKey;
  tokenProgram?: PublicKey;
  systemProgram?: PublicKey;
  recentSlothashes: PublicKey;
  instructionSysvarAccount: PublicKey;
};

// Arguments.
export type MintFromCandyGuardInstructionData = {
  discriminator: Array<number>;
  mintArgs: Uint8Array;
  label: Option<string>;
};

export type MintFromCandyGuardInstructionArgs = {
  mintArgs: Uint8Array;
  label: Option<string>;
};

export function getMintFromCandyGuardInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  MintFromCandyGuardInstructionArgs,
  MintFromCandyGuardInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    MintFromCandyGuardInstructionArgs,
    MintFromCandyGuardInstructionData,
    MintFromCandyGuardInstructionData
  >(
    s.struct<MintFromCandyGuardInstructionData>(
      [
        ['discriminator', s.array(s.u8, 8)],
        ['mintArgs', s.bytes],
        ['label', s.option(s.string)],
      ],
      'mintInstructionArgs'
    ),
    (value) =>
      ({
        discriminator: [51, 57, 225, 47, 182, 146, 137, 166],
        ...value,
      } as MintFromCandyGuardInstructionData)
  ) as Serializer<
    MintFromCandyGuardInstructionArgs,
    MintFromCandyGuardInstructionData
  >;
}

// Instruction.
export function mintFromCandyGuard(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: MintFromCandyGuardInstructionAccounts &
    MintFromCandyGuardInstructionArgs
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

  // Candy Machine Program.
  keys.push({
    pubkey: input.candyMachineProgram,
    isSigner: false,
    isWritable: false,
  });

  // Candy Machine.
  keys.push({ pubkey: input.candyMachine, isSigner: false, isWritable: false });

  // Candy Machine Authority Pda.
  keys.push({
    pubkey: input.candyMachineAuthorityPda,
    isSigner: false,
    isWritable: false,
  });

  // Payer.
  signers.push(input.payer);
  keys.push({
    pubkey: input.payer.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Nft Metadata.
  keys.push({ pubkey: input.nftMetadata, isSigner: false, isWritable: false });

  // Nft Mint.
  keys.push({ pubkey: input.nftMint, isSigner: false, isWritable: false });

  // Nft Mint Authority.
  signers.push(input.nftMintAuthority);
  keys.push({
    pubkey: input.nftMintAuthority.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Nft Master Edition.
  keys.push({
    pubkey: input.nftMasterEdition,
    isSigner: false,
    isWritable: false,
  });

  // Collection Authority Record.
  keys.push({
    pubkey: input.collectionAuthorityRecord,
    isSigner: false,
    isWritable: false,
  });

  // Collection Mint.
  keys.push({
    pubkey: input.collectionMint,
    isSigner: false,
    isWritable: false,
  });

  // Collection Metadata.
  keys.push({
    pubkey: input.collectionMetadata,
    isSigner: false,
    isWritable: false,
  });

  // Collection Master Edition.
  keys.push({
    pubkey: input.collectionMasterEdition,
    isSigner: false,
    isWritable: false,
  });

  // Collection Update Authority.
  keys.push({
    pubkey: input.collectionUpdateAuthority,
    isSigner: false,
    isWritable: false,
  });

  // Token Metadata Program.
  keys.push({
    pubkey: input.tokenMetadataProgram,
    isSigner: false,
    isWritable: false,
  });

  // Token Program.
  keys.push({
    pubkey:
      input.tokenProgram ??
      getProgramAddressWithFallback(
        context,
        'splToken',
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
      ),
    isSigner: false,
    isWritable: false,
  });

  // System Program.
  keys.push({
    pubkey:
      input.systemProgram ??
      getProgramAddressWithFallback(
        context,
        'splSystem',
        '11111111111111111111111111111111'
      ),
    isSigner: false,
    isWritable: false,
  });

  // Recent Slothashes.
  keys.push({
    pubkey: input.recentSlothashes,
    isSigner: false,
    isWritable: false,
  });

  // Instruction Sysvar Account.
  keys.push({
    pubkey: input.instructionSysvarAccount,
    isSigner: false,
    isWritable: false,
  });

  // Data.
  const data =
    getMintFromCandyGuardInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
