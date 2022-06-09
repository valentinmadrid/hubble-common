import { BORROWING_IDL } from '../dist';
import { SCOPE_IDL } from '../src';

describe('IDL Tests', () => {
  test('should return Hubble borrowing IDL ', () => {
    expect(BORROWING_IDL).not.toBeNull();
    expect(BORROWING_IDL.name).toBe('borrowing');
    expect(BORROWING_IDL.errors.length).toBeGreaterThan(0);
    expect(BORROWING_IDL.accounts.length).toBeGreaterThan(0);
    expect(BORROWING_IDL.types.length).toBeGreaterThan(0);
    expect(BORROWING_IDL.instructions.length).toBeGreaterThan(0);
  });

  test('should return Scope IDL ', () => {
    expect(SCOPE_IDL).not.toBeNull();
    expect(SCOPE_IDL.name).toBe('scope');
    expect(SCOPE_IDL.errors.length).toBeGreaterThan(0);
    expect(SCOPE_IDL.accounts.length).toBeGreaterThan(0);
    expect(SCOPE_IDL.types.length).toBeGreaterThan(0);
    expect(SCOPE_IDL.instructions.length).toBeGreaterThan(0);
  });
});
