/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  Pda,
  PublicKey,
  Signer,
  TransactionBuilder,
  transactionBuilder,
} from '@metaplex-foundation/umi';
import {
  Serializer,
  mapSerializer,
  struct,
  u8,
} from '@metaplex-foundation/umi/serializers';
import {
  ResolvedAccount,
  ResolvedAccountsWithIndices,
  getAccountMetasAndSigners,
} from '../shared';

// Accounts.
export type RevokeTokenDelegateInstructionAccounts = {
  source: PublicKey | Pda;
  owner: Signer;
};

// Data.
export type RevokeTokenDelegateInstructionData = { discriminator: number };

export type RevokeTokenDelegateInstructionDataArgs = {};

export function getRevokeTokenDelegateInstructionDataSerializer(): Serializer<
  RevokeTokenDelegateInstructionDataArgs,
  RevokeTokenDelegateInstructionData
> {
  return mapSerializer<
    RevokeTokenDelegateInstructionDataArgs,
    any,
    RevokeTokenDelegateInstructionData
  >(
    struct<RevokeTokenDelegateInstructionData>([['discriminator', u8()]], {
      description: 'RevokeTokenDelegateInstructionData',
    }),
    (value) => ({ ...value, discriminator: 5 })
  ) as Serializer<
    RevokeTokenDelegateInstructionDataArgs,
    RevokeTokenDelegateInstructionData
  >;
}

// Instruction.
export function revokeTokenDelegate(
  context: Pick<Context, 'programs'>,
  input: RevokeTokenDelegateInstructionAccounts
): TransactionBuilder {
  // Program ID.
  const programId = context.programs.getPublicKey(
    'splToken',
    'TTTXzBCbNAJ7sJZErBkpdsgLWgwgR9gx6tud8m34YXb'
  );

  // Accounts.
  const resolvedAccounts: ResolvedAccountsWithIndices = {
    source: { index: 0, isWritable: true, value: input.source ?? null },
    owner: { index: 1, isWritable: false, value: input.owner ?? null },
  };

  // Accounts in order.
  const orderedAccounts: ResolvedAccount[] = Object.values(
    resolvedAccounts
  ).sort((a, b) => a.index - b.index);

  // Keys and Signers.
  const [keys, signers] = getAccountMetasAndSigners(
    orderedAccounts,
    'programId',
    programId
  );

  // Data.
  const data = getRevokeTokenDelegateInstructionDataSerializer().serialize({});

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return transactionBuilder([
    { instruction: { keys, programId, data }, signers, bytesCreatedOnChain },
  ]);
}
