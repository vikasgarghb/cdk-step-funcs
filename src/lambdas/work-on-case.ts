import { Case } from './types';

export const handler = async (event: Case): Promise<Case> => {
  // Generate a random number to determine whether the support case has been resolved, then return that value along with the updated message.
  const myCaseStatus = Math.floor(Math.random());
  let myMessage = event.Message;
  if (myCaseStatus === 1) {
    // Support case has been resolved
    myMessage = `${myMessage} resolved...`;
  } else if (myCaseStatus === 0) {
    // Support case is still open
    myMessage = `${myMessage} unresolved...`;
  }
  return { Case: event.Case, Status: myCaseStatus, Message: myMessage };
};
