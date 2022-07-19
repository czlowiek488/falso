import { FakeOptions, fake } from './core/core';
import { data } from './mime-type.json';

/**
 * Generate a random mime type.
 *
 * @category system
 *
 * @example
 *
 * randMimeType()
 *
 * @example
 *
 * randMimeType({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randMimeType<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
