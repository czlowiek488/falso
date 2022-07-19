import { FakeOptions, fake } from './core/core';
import { data } from './american-football-team.json';

/**
 * Generate a random american football team.
 *
 * @category sports
 *
 * @example
 *
 * randAmericanFootballTeam()
 *
 * @example
 *
 * randAmericanFootballTeam({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randAmericanFootballTeam<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
