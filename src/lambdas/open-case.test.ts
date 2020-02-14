import { handler } from './open-case';

describe('Open Case', () => {
  it('should return an opened case', async () => {
    expect(await handler({ id: '1' })).toEqual({
      Case: '1',
      Message: 'Case 1 : opened...',
    });
  });
});
