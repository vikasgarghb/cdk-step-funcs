import { Case } from './types';

export const handler = async (event: Case): Promise<Case> => {
  // Escalate the support case
  return { Case: event.Case, Status: event.Status, Message: `${event.Message} escalating.` };
};
