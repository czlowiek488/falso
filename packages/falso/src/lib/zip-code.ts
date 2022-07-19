import { fake, FakeOptions } from './core/core';
import { randNumber } from './number';
import { randBoolean } from './boolean';

/**
 * Generate a random zip code.
 *
 * @category address
 *
 * @example
 *
 * randZipCode()
 *
 * @example
 *
 * randZipCode({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randZipCode<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => {
    let zipCode = '' + randNumber({ min: 10_000, max: 99_999 });

    if (randBoolean()) {
      zipCode += '-' + randNumber({ min: 1_000, max: 9_999 });
    }

    return zipCode;
  }, options);
}
