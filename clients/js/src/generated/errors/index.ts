/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number };
type MaybeErrorWithCode = ErrorWithCode | null | undefined;

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map();
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map();

/**
 * InvalidAccountSize: 'Could not save guard to account'
 *
 * @category Errors
 * @category generated
 */
export class InvalidAccountSizeError extends Error {
  readonly code: number = 0x1770;
  readonly name: string = 'InvalidAccountSize';
  constructor() {
    super('Could not save guard to account');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidAccountSizeError);
    }
  }
}

createErrorFromCodeLookup.set(0x1770, () => new InvalidAccountSizeError());
createErrorFromNameLookup.set('InvalidAccountSize', () => new InvalidAccountSizeError());

/**
 * DeserializationError: 'Could not deserialize guard'
 *
 * @category Errors
 * @category generated
 */
export class DeserializationErrorError extends Error {
  readonly code: number = 0x1771;
  readonly name: string = 'DeserializationError';
  constructor() {
    super('Could not deserialize guard');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DeserializationErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0x1771, () => new DeserializationErrorError());
createErrorFromNameLookup.set('DeserializationError', () => new DeserializationErrorError());

/**
 * PublicKeyMismatch: 'Public key mismatch'
 *
 * @category Errors
 * @category generated
 */
export class PublicKeyMismatchError extends Error {
  readonly code: number = 0x1772;
  readonly name: string = 'PublicKeyMismatch';
  constructor() {
    super('Public key mismatch');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, PublicKeyMismatchError);
    }
  }
}

createErrorFromCodeLookup.set(0x1772, () => new PublicKeyMismatchError());
createErrorFromNameLookup.set('PublicKeyMismatch', () => new PublicKeyMismatchError());

/**
 * DataIncrementLimitExceeded: 'Exceeded account increase limit'
 *
 * @category Errors
 * @category generated
 */
export class DataIncrementLimitExceededError extends Error {
  readonly code: number = 0x1773;
  readonly name: string = 'DataIncrementLimitExceeded';
  constructor() {
    super('Exceeded account increase limit');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DataIncrementLimitExceededError);
    }
  }
}

createErrorFromCodeLookup.set(0x1773, () => new DataIncrementLimitExceededError());
createErrorFromNameLookup.set(
  'DataIncrementLimitExceeded',
  () => new DataIncrementLimitExceededError(),
);

/**
 * IncorrectOwner: 'Account does not have correct owner'
 *
 * @category Errors
 * @category generated
 */
export class IncorrectOwnerError extends Error {
  readonly code: number = 0x1774;
  readonly name: string = 'IncorrectOwner';
  constructor() {
    super('Account does not have correct owner');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IncorrectOwnerError);
    }
  }
}

createErrorFromCodeLookup.set(0x1774, () => new IncorrectOwnerError());
createErrorFromNameLookup.set('IncorrectOwner', () => new IncorrectOwnerError());

/**
 * Uninitialized: 'Account is not initialized'
 *
 * @category Errors
 * @category generated
 */
export class UninitializedError extends Error {
  readonly code: number = 0x1775;
  readonly name: string = 'Uninitialized';
  constructor() {
    super('Account is not initialized');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UninitializedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1775, () => new UninitializedError());
createErrorFromNameLookup.set('Uninitialized', () => new UninitializedError());

/**
 * MissingRemainingAccount: 'Missing expected remaining account'
 *
 * @category Errors
 * @category generated
 */
export class MissingRemainingAccountError extends Error {
  readonly code: number = 0x1776;
  readonly name: string = 'MissingRemainingAccount';
  constructor() {
    super('Missing expected remaining account');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MissingRemainingAccountError);
    }
  }
}

createErrorFromCodeLookup.set(0x1776, () => new MissingRemainingAccountError());
createErrorFromNameLookup.set('MissingRemainingAccount', () => new MissingRemainingAccountError());

/**
 * NumericalOverflowError: 'Numerical overflow error'
 *
 * @category Errors
 * @category generated
 */
export class NumericalOverflowErrorError extends Error {
  readonly code: number = 0x1777;
  readonly name: string = 'NumericalOverflowError';
  constructor() {
    super('Numerical overflow error');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NumericalOverflowErrorError);
    }
  }
}

createErrorFromCodeLookup.set(0x1777, () => new NumericalOverflowErrorError());
createErrorFromNameLookup.set('NumericalOverflowError', () => new NumericalOverflowErrorError());

/**
 * RequiredGroupLabelNotFound: 'Missing required group label'
 *
 * @category Errors
 * @category generated
 */
export class RequiredGroupLabelNotFoundError extends Error {
  readonly code: number = 0x1778;
  readonly name: string = 'RequiredGroupLabelNotFound';
  constructor() {
    super('Missing required group label');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, RequiredGroupLabelNotFoundError);
    }
  }
}

createErrorFromCodeLookup.set(0x1778, () => new RequiredGroupLabelNotFoundError());
createErrorFromNameLookup.set(
  'RequiredGroupLabelNotFound',
  () => new RequiredGroupLabelNotFoundError(),
);

/**
 * GroupNotFound: 'Group not found'
 *
 * @category Errors
 * @category generated
 */
export class GroupNotFoundError extends Error {
  readonly code: number = 0x1779;
  readonly name: string = 'GroupNotFound';
  constructor() {
    super('Group not found');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, GroupNotFoundError);
    }
  }
}

createErrorFromCodeLookup.set(0x1779, () => new GroupNotFoundError());
createErrorFromNameLookup.set('GroupNotFound', () => new GroupNotFoundError());

/**
 * ExceededLength: 'Value exceeded maximum length'
 *
 * @category Errors
 * @category generated
 */
export class ExceededLengthError extends Error {
  readonly code: number = 0x177a;
  readonly name: string = 'ExceededLength';
  constructor() {
    super('Value exceeded maximum length');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ExceededLengthError);
    }
  }
}

createErrorFromCodeLookup.set(0x177a, () => new ExceededLengthError());
createErrorFromNameLookup.set('ExceededLength', () => new ExceededLengthError());

/**
 * CandyMachineEmpty: 'Candy machine is empty'
 *
 * @category Errors
 * @category generated
 */
export class CandyMachineEmptyError extends Error {
  readonly code: number = 0x177b;
  readonly name: string = 'CandyMachineEmpty';
  constructor() {
    super('Candy machine is empty');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, CandyMachineEmptyError);
    }
  }
}

createErrorFromCodeLookup.set(0x177b, () => new CandyMachineEmptyError());
createErrorFromNameLookup.set('CandyMachineEmpty', () => new CandyMachineEmptyError());

/**
 * InstructionNotFound: 'No instruction was found'
 *
 * @category Errors
 * @category generated
 */
export class InstructionNotFoundError extends Error {
  readonly code: number = 0x177c;
  readonly name: string = 'InstructionNotFound';
  constructor() {
    super('No instruction was found');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InstructionNotFoundError);
    }
  }
}

createErrorFromCodeLookup.set(0x177c, () => new InstructionNotFoundError());
createErrorFromNameLookup.set('InstructionNotFound', () => new InstructionNotFoundError());

/**
 * CollectionKeyMismatch: 'Collection public key mismatch'
 *
 * @category Errors
 * @category generated
 */
export class CollectionKeyMismatchError extends Error {
  readonly code: number = 0x177d;
  readonly name: string = 'CollectionKeyMismatch';
  constructor() {
    super('Collection public key mismatch');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, CollectionKeyMismatchError);
    }
  }
}

createErrorFromCodeLookup.set(0x177d, () => new CollectionKeyMismatchError());
createErrorFromNameLookup.set('CollectionKeyMismatch', () => new CollectionKeyMismatchError());

/**
 * MissingCollectionAccounts: 'Missing collection accounts'
 *
 * @category Errors
 * @category generated
 */
export class MissingCollectionAccountsError extends Error {
  readonly code: number = 0x177e;
  readonly name: string = 'MissingCollectionAccounts';
  constructor() {
    super('Missing collection accounts');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MissingCollectionAccountsError);
    }
  }
}

createErrorFromCodeLookup.set(0x177e, () => new MissingCollectionAccountsError());
createErrorFromNameLookup.set(
  'MissingCollectionAccounts',
  () => new MissingCollectionAccountsError(),
);

/**
 * CollectionUpdateAuthorityKeyMismatch: 'Collection update authority public key mismatch'
 *
 * @category Errors
 * @category generated
 */
export class CollectionUpdateAuthorityKeyMismatchError extends Error {
  readonly code: number = 0x177f;
  readonly name: string = 'CollectionUpdateAuthorityKeyMismatch';
  constructor() {
    super('Collection update authority public key mismatch');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, CollectionUpdateAuthorityKeyMismatchError);
    }
  }
}

createErrorFromCodeLookup.set(0x177f, () => new CollectionUpdateAuthorityKeyMismatchError());
createErrorFromNameLookup.set(
  'CollectionUpdateAuthorityKeyMismatch',
  () => new CollectionUpdateAuthorityKeyMismatchError(),
);

/**
 * MintNotLastTransaction: 'Mint must be the last instructions of the transaction'
 *
 * @category Errors
 * @category generated
 */
export class MintNotLastTransactionError extends Error {
  readonly code: number = 0x1780;
  readonly name: string = 'MintNotLastTransaction';
  constructor() {
    super('Mint must be the last instructions of the transaction');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MintNotLastTransactionError);
    }
  }
}

createErrorFromCodeLookup.set(0x1780, () => new MintNotLastTransactionError());
createErrorFromNameLookup.set('MintNotLastTransaction', () => new MintNotLastTransactionError());

/**
 * MintNotLive: 'Mint is not live'
 *
 * @category Errors
 * @category generated
 */
export class MintNotLiveError extends Error {
  readonly code: number = 0x1781;
  readonly name: string = 'MintNotLive';
  constructor() {
    super('Mint is not live');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MintNotLiveError);
    }
  }
}

createErrorFromCodeLookup.set(0x1781, () => new MintNotLiveError());
createErrorFromNameLookup.set('MintNotLive', () => new MintNotLiveError());

/**
 * NotEnoughSOL: 'Not enough SOL to pay for the mint'
 *
 * @category Errors
 * @category generated
 */
export class NotEnoughSOLError extends Error {
  readonly code: number = 0x1782;
  readonly name: string = 'NotEnoughSOL';
  constructor() {
    super('Not enough SOL to pay for the mint');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NotEnoughSOLError);
    }
  }
}

createErrorFromCodeLookup.set(0x1782, () => new NotEnoughSOLError());
createErrorFromNameLookup.set('NotEnoughSOL', () => new NotEnoughSOLError());

/**
 * TokenBurnFailed: 'Token burn failed'
 *
 * @category Errors
 * @category generated
 */
export class TokenBurnFailedError extends Error {
  readonly code: number = 0x1783;
  readonly name: string = 'TokenBurnFailed';
  constructor() {
    super('Token burn failed');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, TokenBurnFailedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1783, () => new TokenBurnFailedError());
createErrorFromNameLookup.set('TokenBurnFailed', () => new TokenBurnFailedError());

/**
 * NotEnoughTokens: 'Not enough tokens on the account'
 *
 * @category Errors
 * @category generated
 */
export class NotEnoughTokensError extends Error {
  readonly code: number = 0x1784;
  readonly name: string = 'NotEnoughTokens';
  constructor() {
    super('Not enough tokens on the account');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NotEnoughTokensError);
    }
  }
}

createErrorFromCodeLookup.set(0x1784, () => new NotEnoughTokensError());
createErrorFromNameLookup.set('NotEnoughTokens', () => new NotEnoughTokensError());

/**
 * TokenTransferFailed: 'Token transfer failed'
 *
 * @category Errors
 * @category generated
 */
export class TokenTransferFailedError extends Error {
  readonly code: number = 0x1785;
  readonly name: string = 'TokenTransferFailed';
  constructor() {
    super('Token transfer failed');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, TokenTransferFailedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1785, () => new TokenTransferFailedError());
createErrorFromNameLookup.set('TokenTransferFailed', () => new TokenTransferFailedError());

/**
 * MissingRequiredSignature: 'A signature was required but not found'
 *
 * @category Errors
 * @category generated
 */
export class MissingRequiredSignatureError extends Error {
  readonly code: number = 0x1786;
  readonly name: string = 'MissingRequiredSignature';
  constructor() {
    super('A signature was required but not found');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MissingRequiredSignatureError);
    }
  }
}

createErrorFromCodeLookup.set(0x1786, () => new MissingRequiredSignatureError());
createErrorFromNameLookup.set(
  'MissingRequiredSignature',
  () => new MissingRequiredSignatureError(),
);

/**
 * GatewayTokenInvalid: 'Gateway token is not valid'
 *
 * @category Errors
 * @category generated
 */
export class GatewayTokenInvalidError extends Error {
  readonly code: number = 0x1787;
  readonly name: string = 'GatewayTokenInvalid';
  constructor() {
    super('Gateway token is not valid');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, GatewayTokenInvalidError);
    }
  }
}

createErrorFromCodeLookup.set(0x1787, () => new GatewayTokenInvalidError());
createErrorFromNameLookup.set('GatewayTokenInvalid', () => new GatewayTokenInvalidError());

/**
 * AfterEndDate: 'Current time is after the set end date'
 *
 * @category Errors
 * @category generated
 */
export class AfterEndDateError extends Error {
  readonly code: number = 0x1788;
  readonly name: string = 'AfterEndDate';
  constructor() {
    super('Current time is after the set end date');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AfterEndDateError);
    }
  }
}

createErrorFromCodeLookup.set(0x1788, () => new AfterEndDateError());
createErrorFromNameLookup.set('AfterEndDate', () => new AfterEndDateError());

/**
 * InvalidMintTime: 'Current time is not within the allowed mint time'
 *
 * @category Errors
 * @category generated
 */
export class InvalidMintTimeError extends Error {
  readonly code: number = 0x1789;
  readonly name: string = 'InvalidMintTime';
  constructor() {
    super('Current time is not within the allowed mint time');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidMintTimeError);
    }
  }
}

createErrorFromCodeLookup.set(0x1789, () => new InvalidMintTimeError());
createErrorFromNameLookup.set('InvalidMintTime', () => new InvalidMintTimeError());

/**
 * AddressNotFoundInAllowedList: 'Address not found on the allowed list'
 *
 * @category Errors
 * @category generated
 */
export class AddressNotFoundInAllowedListError extends Error {
  readonly code: number = 0x178a;
  readonly name: string = 'AddressNotFoundInAllowedList';
  constructor() {
    super('Address not found on the allowed list');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AddressNotFoundInAllowedListError);
    }
  }
}

createErrorFromCodeLookup.set(0x178a, () => new AddressNotFoundInAllowedListError());
createErrorFromNameLookup.set(
  'AddressNotFoundInAllowedList',
  () => new AddressNotFoundInAllowedListError(),
);

/**
 * MissingAllowedListProof: 'Missing allowed list proof'
 *
 * @category Errors
 * @category generated
 */
export class MissingAllowedListProofError extends Error {
  readonly code: number = 0x178b;
  readonly name: string = 'MissingAllowedListProof';
  constructor() {
    super('Missing allowed list proof');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MissingAllowedListProofError);
    }
  }
}

createErrorFromCodeLookup.set(0x178b, () => new MissingAllowedListProofError());
createErrorFromNameLookup.set('MissingAllowedListProof', () => new MissingAllowedListProofError());

/**
 * AllowedListNotEnabled: 'Allow list guard is not enabled'
 *
 * @category Errors
 * @category generated
 */
export class AllowedListNotEnabledError extends Error {
  readonly code: number = 0x178c;
  readonly name: string = 'AllowedListNotEnabled';
  constructor() {
    super('Allow list guard is not enabled');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AllowedListNotEnabledError);
    }
  }
}

createErrorFromCodeLookup.set(0x178c, () => new AllowedListNotEnabledError());
createErrorFromNameLookup.set('AllowedListNotEnabled', () => new AllowedListNotEnabledError());

/**
 * AllowedMintLimitReached: 'The maximum number of allowed mints was reached'
 *
 * @category Errors
 * @category generated
 */
export class AllowedMintLimitReachedError extends Error {
  readonly code: number = 0x178d;
  readonly name: string = 'AllowedMintLimitReached';
  constructor() {
    super('The maximum number of allowed mints was reached');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AllowedMintLimitReachedError);
    }
  }
}

createErrorFromCodeLookup.set(0x178d, () => new AllowedMintLimitReachedError());
createErrorFromNameLookup.set('AllowedMintLimitReached', () => new AllowedMintLimitReachedError());

/**
 * InvalidNftCollection: 'Invalid NFT collection'
 *
 * @category Errors
 * @category generated
 */
export class InvalidNftCollectionError extends Error {
  readonly code: number = 0x178e;
  readonly name: string = 'InvalidNftCollection';
  constructor() {
    super('Invalid NFT collection');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidNftCollectionError);
    }
  }
}

createErrorFromCodeLookup.set(0x178e, () => new InvalidNftCollectionError());
createErrorFromNameLookup.set('InvalidNftCollection', () => new InvalidNftCollectionError());

/**
 * MissingNft: 'Missing NFT on the account'
 *
 * @category Errors
 * @category generated
 */
export class MissingNftError extends Error {
  readonly code: number = 0x178f;
  readonly name: string = 'MissingNft';
  constructor() {
    super('Missing NFT on the account');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MissingNftError);
    }
  }
}

createErrorFromCodeLookup.set(0x178f, () => new MissingNftError());
createErrorFromNameLookup.set('MissingNft', () => new MissingNftError());

/**
 * MaximumRedeemedAmount: 'Current redemeed items is at the set maximum amount'
 *
 * @category Errors
 * @category generated
 */
export class MaximumRedeemedAmountError extends Error {
  readonly code: number = 0x1790;
  readonly name: string = 'MaximumRedeemedAmount';
  constructor() {
    super('Current redemeed items is at the set maximum amount');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MaximumRedeemedAmountError);
    }
  }
}

createErrorFromCodeLookup.set(0x1790, () => new MaximumRedeemedAmountError());
createErrorFromNameLookup.set('MaximumRedeemedAmount', () => new MaximumRedeemedAmountError());

/**
 * AddressNotAuthorized: 'Address not authorized'
 *
 * @category Errors
 * @category generated
 */
export class AddressNotAuthorizedError extends Error {
  readonly code: number = 0x1791;
  readonly name: string = 'AddressNotAuthorized';
  constructor() {
    super('Address not authorized');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AddressNotAuthorizedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1791, () => new AddressNotAuthorizedError());
createErrorFromNameLookup.set('AddressNotAuthorized', () => new AddressNotAuthorizedError());

/**
 * MissingFreezeInstruction: 'Missing freeze instruction data'
 *
 * @category Errors
 * @category generated
 */
export class MissingFreezeInstructionError extends Error {
  readonly code: number = 0x1792;
  readonly name: string = 'MissingFreezeInstruction';
  constructor() {
    super('Missing freeze instruction data');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MissingFreezeInstructionError);
    }
  }
}

createErrorFromCodeLookup.set(0x1792, () => new MissingFreezeInstructionError());
createErrorFromNameLookup.set(
  'MissingFreezeInstruction',
  () => new MissingFreezeInstructionError(),
);

/**
 * FreezeGuardNotEnabled: 'Freeze guard must be enabled'
 *
 * @category Errors
 * @category generated
 */
export class FreezeGuardNotEnabledError extends Error {
  readonly code: number = 0x1793;
  readonly name: string = 'FreezeGuardNotEnabled';
  constructor() {
    super('Freeze guard must be enabled');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, FreezeGuardNotEnabledError);
    }
  }
}

createErrorFromCodeLookup.set(0x1793, () => new FreezeGuardNotEnabledError());
createErrorFromNameLookup.set('FreezeGuardNotEnabled', () => new FreezeGuardNotEnabledError());

/**
 * FreezeNotInitialized: 'Freeze must be initialized'
 *
 * @category Errors
 * @category generated
 */
export class FreezeNotInitializedError extends Error {
  readonly code: number = 0x1794;
  readonly name: string = 'FreezeNotInitialized';
  constructor() {
    super('Freeze must be initialized');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, FreezeNotInitializedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1794, () => new FreezeNotInitializedError());
createErrorFromNameLookup.set('FreezeNotInitialized', () => new FreezeNotInitializedError());

/**
 * MissingFreezePeriod: 'Missing freeze period'
 *
 * @category Errors
 * @category generated
 */
export class MissingFreezePeriodError extends Error {
  readonly code: number = 0x1795;
  readonly name: string = 'MissingFreezePeriod';
  constructor() {
    super('Missing freeze period');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MissingFreezePeriodError);
    }
  }
}

createErrorFromCodeLookup.set(0x1795, () => new MissingFreezePeriodError());
createErrorFromNameLookup.set('MissingFreezePeriod', () => new MissingFreezePeriodError());

/**
 * FreezeEscrowAlreadyExists: 'The freeze escrow account already exists'
 *
 * @category Errors
 * @category generated
 */
export class FreezeEscrowAlreadyExistsError extends Error {
  readonly code: number = 0x1796;
  readonly name: string = 'FreezeEscrowAlreadyExists';
  constructor() {
    super('The freeze escrow account already exists');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, FreezeEscrowAlreadyExistsError);
    }
  }
}

createErrorFromCodeLookup.set(0x1796, () => new FreezeEscrowAlreadyExistsError());
createErrorFromNameLookup.set(
  'FreezeEscrowAlreadyExists',
  () => new FreezeEscrowAlreadyExistsError(),
);

/**
 * ExceededMaximumFreezePeriod: 'Maximum freeze period exceeded'
 *
 * @category Errors
 * @category generated
 */
export class ExceededMaximumFreezePeriodError extends Error {
  readonly code: number = 0x1797;
  readonly name: string = 'ExceededMaximumFreezePeriod';
  constructor() {
    super('Maximum freeze period exceeded');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ExceededMaximumFreezePeriodError);
    }
  }
}

createErrorFromCodeLookup.set(0x1797, () => new ExceededMaximumFreezePeriodError());
createErrorFromNameLookup.set(
  'ExceededMaximumFreezePeriod',
  () => new ExceededMaximumFreezePeriodError(),
);

/**
 * ThawNotEnabled: 'Thaw is not enabled'
 *
 * @category Errors
 * @category generated
 */
export class ThawNotEnabledError extends Error {
  readonly code: number = 0x1798;
  readonly name: string = 'ThawNotEnabled';
  constructor() {
    super('Thaw is not enabled');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ThawNotEnabledError);
    }
  }
}

createErrorFromCodeLookup.set(0x1798, () => new ThawNotEnabledError());
createErrorFromNameLookup.set('ThawNotEnabled', () => new ThawNotEnabledError());

/**
 * UnlockNotEnabled: 'Unlock is not enabled (not all NFTs are thawed)'
 *
 * @category Errors
 * @category generated
 */
export class UnlockNotEnabledError extends Error {
  readonly code: number = 0x1799;
  readonly name: string = 'UnlockNotEnabled';
  constructor() {
    super('Unlock is not enabled (not all NFTs are thawed)');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnlockNotEnabledError);
    }
  }
}

createErrorFromCodeLookup.set(0x1799, () => new UnlockNotEnabledError());
createErrorFromNameLookup.set('UnlockNotEnabled', () => new UnlockNotEnabledError());

/**
 * DuplicatedGroupLabel: 'Duplicated group label'
 *
 * @category Errors
 * @category generated
 */
export class DuplicatedGroupLabelError extends Error {
  readonly code: number = 0x179a;
  readonly name: string = 'DuplicatedGroupLabel';
  constructor() {
    super('Duplicated group label');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DuplicatedGroupLabelError);
    }
  }
}

createErrorFromCodeLookup.set(0x179a, () => new DuplicatedGroupLabelError());
createErrorFromNameLookup.set('DuplicatedGroupLabel', () => new DuplicatedGroupLabelError());

/**
 * DuplicatedMintLimitId: 'Duplicated mint limit id'
 *
 * @category Errors
 * @category generated
 */
export class DuplicatedMintLimitIdError extends Error {
  readonly code: number = 0x179b;
  readonly name: string = 'DuplicatedMintLimitId';
  constructor() {
    super('Duplicated mint limit id');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DuplicatedMintLimitIdError);
    }
  }
}

createErrorFromCodeLookup.set(0x179b, () => new DuplicatedMintLimitIdError());
createErrorFromNameLookup.set('DuplicatedMintLimitId', () => new DuplicatedMintLimitIdError());

/**
 * UnauthorizedProgramFound: 'An unauthorized program was found in the transaction'
 *
 * @category Errors
 * @category generated
 */
export class UnauthorizedProgramFoundError extends Error {
  readonly code: number = 0x179c;
  readonly name: string = 'UnauthorizedProgramFound';
  constructor() {
    super('An unauthorized program was found in the transaction');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnauthorizedProgramFoundError);
    }
  }
}

createErrorFromCodeLookup.set(0x179c, () => new UnauthorizedProgramFoundError());
createErrorFromNameLookup.set(
  'UnauthorizedProgramFound',
  () => new UnauthorizedProgramFoundError(),
);

/**
 * ExceededProgramListSize: 'Exceeded the maximum number of programs in the additional list'
 *
 * @category Errors
 * @category generated
 */
export class ExceededProgramListSizeError extends Error {
  readonly code: number = 0x179d;
  readonly name: string = 'ExceededProgramListSize';
  constructor() {
    super('Exceeded the maximum number of programs in the additional list');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ExceededProgramListSizeError);
    }
  }
}

createErrorFromCodeLookup.set(0x179d, () => new ExceededProgramListSizeError());
createErrorFromNameLookup.set('ExceededProgramListSize', () => new ExceededProgramListSizeError());

/**
 * AllocationNotInitialized: 'Allocation PDA not initialized'
 *
 * @category Errors
 * @category generated
 */
export class AllocationNotInitializedError extends Error {
  readonly code: number = 0x179e;
  readonly name: string = 'AllocationNotInitialized';
  constructor() {
    super('Allocation PDA not initialized');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AllocationNotInitializedError);
    }
  }
}

createErrorFromCodeLookup.set(0x179e, () => new AllocationNotInitializedError());
createErrorFromNameLookup.set(
  'AllocationNotInitialized',
  () => new AllocationNotInitializedError(),
);

/**
 * AllocationLimitReached: 'Allocation limit was reached'
 *
 * @category Errors
 * @category generated
 */
export class AllocationLimitReachedError extends Error {
  readonly code: number = 0x179f;
  readonly name: string = 'AllocationLimitReached';
  constructor() {
    super('Allocation limit was reached');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AllocationLimitReachedError);
    }
  }
}

createErrorFromCodeLookup.set(0x179f, () => new AllocationLimitReachedError());
createErrorFromNameLookup.set('AllocationLimitReached', () => new AllocationLimitReachedError());

/**
 * AllocationGuardNotEnabled: 'Allocation guard must be enabled'
 *
 * @category Errors
 * @category generated
 */
export class AllocationGuardNotEnabledError extends Error {
  readonly code: number = 0x17a0;
  readonly name: string = 'AllocationGuardNotEnabled';
  constructor() {
    super('Allocation guard must be enabled');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AllocationGuardNotEnabledError);
    }
  }
}

createErrorFromCodeLookup.set(0x17a0, () => new AllocationGuardNotEnabledError());
createErrorFromNameLookup.set(
  'AllocationGuardNotEnabled',
  () => new AllocationGuardNotEnabledError(),
);

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code);
  return createError != null ? createError() : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name);
  return createError != null ? createError() : null;
}