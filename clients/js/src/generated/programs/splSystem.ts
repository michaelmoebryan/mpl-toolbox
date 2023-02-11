/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Program, publicKey } from '@metaplex-foundation/umi-core';
import {
  getSplSystemErrorFromCode,
  getSplSystemErrorFromName,
} from '../errors';

export function getSplSystemProgram(): Program {
  return {
    name: 'splSystem',
    publicKey: publicKey('11111111111111111111111111111111'),
    getErrorFromCode(code: number, cause?: Error) {
      return getSplSystemErrorFromCode(code, this, cause);
    },
    getErrorFromName(name: string, cause?: Error) {
      return getSplSystemErrorFromName(name, this, cause);
    },
    isOnCluster() {
      return true;
    },
  };
}
