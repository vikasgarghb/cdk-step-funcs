import { handler } from './assign-case';

describe('Assign Case', () => {
  it('should return an assigned case', async () => {
    expect(await handler({ Case: '1', Message: 'opened' })).toEqual({
      Case: '1',
      Message: 'opened assigned...',
    });
  });
});
