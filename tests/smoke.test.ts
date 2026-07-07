import { describe, it, expect } from 'vitest';

describe('sandbox pipeline probe', () => {
  it('runs a trivial assertion so the folded-test gate has something to execute', () => {
    expect(1 + 1).toBe(2);
  });
});
