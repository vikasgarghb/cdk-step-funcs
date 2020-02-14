import { handler } from './close-case';

describe('Close Case', () => {
  it('should return a closed case', async () => {
    expect(await handler({ Case: '1', Status: 1, Message: 'opened' })).toEqual({
      Case: '1',
      Status: 1,
      Message: 'opened closed.',
    });
  });
});
