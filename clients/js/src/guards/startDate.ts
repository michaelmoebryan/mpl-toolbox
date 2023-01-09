import { getStartDateSerializer } from 'src/generated';
import { CandyGuardManifest } from './core';

/**
 * The startDate guard determines the start date of the mint.
 * Before this date, minting is not allowed.
 *
 * This object defines the settings that should be
 * provided when creating and/or updating a Candy
 * Machine if you wish to enable this guard.
 */
export type StartDateGuardSettings = {
  /** The date before which minting is not yet possible. */
  date: bigint;
};

/** @internal */
export const startDateGuardManifest: CandyGuardManifest<StartDateGuardSettings> =
  {
    name: 'startDate',
    settingsBytes: 8,
    settingsSerializer: getStartDateSerializer,
  };