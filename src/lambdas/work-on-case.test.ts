import { handler } from './work-on-case';

describe('Work on Case', () => {
  it('should work on case', async () => {
    expect(await handler({ Case: '1', Message: 'opened' })).toMatchObject({
      Case: '1',
    });
  });
});
