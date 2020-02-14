import { handler } from './escalate-case';

describe('Escalate Case', () => {
  it('should return an escalated case', async () => {
    expect(await handler({ Case: '1', Status: 1, Message: 'opened' })).toEqual({
      Case: '1',
      Status: 1,
      Message: 'opened escalating.',
    });
  });
});
