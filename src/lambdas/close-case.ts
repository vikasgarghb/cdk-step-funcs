import { Case } from '../types';

export const handler = async (event: Case): Promise<Case> => {
  // Close the support case
  return { Case: event.Case, Status: event.Status, Message: `${event.Message} closed.` };
};
