import { FakeOptions, fake } from './core/core';
import { data } from './city.json';

/**
 * Generate a random city.
 *
 * @category Address
 *
 * @example
 *
 * randCity()
 *
 * @example
 *
 * randCity({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randCity<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
