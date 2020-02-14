import { OpenCaseEvent, Case } from './types';

export const handler = async (event: OpenCaseEvent): Promise<Case> => {
  // Create a support case using the input as the case ID, then return a confirmation message
  return { Case: event.id, Message: `Case ${event.id} : opened...` };
};
