/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Program, ProgramError } from '@metaplex-foundation/umi-core';

type ProgramErrorConstructor = new (
  program: Program,
  cause?: Error
) => ProgramError;
const codeToErrorMap: Map<number, ProgramErrorConstructor> = new Map();
const nameToErrorMap: Map<string, ProgramErrorConstructor> = new Map();

/** InvalidSystemProgram: 'Invalid System Program' */
export class SysExInvalidSystemProgramError extends ProgramError {
  readonly name: string = 'InvalidSystemProgram';

  readonly code: number = 0x0; // 0

  constructor(program: Program, cause?: Error) {
    super('Invalid System Program', program, cause);
  }
}
codeToErrorMap.set(0x0, SysExInvalidSystemProgramError);
nameToErrorMap.set('InvalidSystemProgram', SysExInvalidSystemProgramError);

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 */
export function getMplSystemExtrasErrorFromCode(
  code: number,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = codeToErrorMap.get(code);
  return constructor ? new constructor(program, cause) : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 */
export function getMplSystemExtrasErrorFromName(
  name: string,
  program: Program,
  cause?: Error
): ProgramError | null {
  const constructor = nameToErrorMap.get(name);
  return constructor ? new constructor(program, cause) : null;
}
