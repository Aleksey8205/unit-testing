import { determineHealthStatus } from '../../index.js';

describe('Determine Health Status', () => {
  test('Player with high health should be healthy', () => {
    const player = { name: 'Warrior', health: 90 };
    expect(determineHealthStatus(player)).toEqual('healthy');
  });

  test('Player with medium health should be wounded', () => {
    const player = { name: 'Rogue', health: 30 };
    expect(determineHealthStatus(player)).toEqual('wounded');
  });

  test('Player with low health should be critical', () => {
    const player = { name: 'Wizard', health: 10 };
    expect(determineHealthStatus(player)).toEqual('critical');
  });

  test('Exact borderline cases', () => {
    const playerBorderlineHigh = { name: 'Knight', health: 50 };
    expect(determineHealthStatus(playerBorderlineHigh)).toEqual('wounded');

    const playerBorderlineLow = { name: 'Healer', health: 15 };
    expect(determineHealthStatus(playerBorderlineLow)).toEqual('wounded');
  });
});
