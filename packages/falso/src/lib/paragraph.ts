import { FakeOptions, fake } from './core/core';
import { data } from './paragraph.json';

/**
 * Generate a random paragraph.
 *
 * @category text
 *
 * @example
 *
 * randJobTitle()
 *
 * @example
 *
 * randJobTitle({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randParagraph<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
