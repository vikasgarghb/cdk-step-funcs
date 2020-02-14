import { Case } from './types';

export const handler = async (event: Case): Promise<Case> => {
  // Assign the support case and update the status message
  return { Case: event.Case, Message: `${event.Message} assigned...` };
};
