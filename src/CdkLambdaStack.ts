import { Stack, Construct } from '@aws-cdk/core';
import { Function, AssetCode, Runtime } from '@aws-cdk/aws-lambda';
import { Task, Fail, Choice, Chain, Condition, StateMachine } from '@aws-cdk/aws-stepfunctions';
import { InvokeFunction } from '@aws-cdk/aws-stepfunctions-tasks';

const lambdaPath = `${__dirname}/lambdas`;

export class CdkLambdaStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const openCaseLambda = new Function(this, 'openCaseFunction', {
      code: new AssetCode(lambdaPath),
      handler: 'open-case.handler',
      runtime: Runtime.NODEJS_12_X,
    });

    const assignCaseLambda = new Function(this, 'assignCaseFunction', {
      code: new AssetCode(lambdaPath),
      handler: 'assign-case.handler',
      runtime: Runtime.NODEJS_12_X,
    });

    const workOnCaseLambda = new Function(this, 'workOnCaseFunction', {
      code: new AssetCode(lambdaPath),
      handler: 'work-on-case.handler',
      runtime: Runtime.NODEJS_12_X,
    });

    const escalateCaseLambda = new Function(this, 'escalateCaseFunction', {
      code: new AssetCode(lambdaPath),
      handler: 'escalate-case.handler',
      runtime: Runtime.NODEJS_12_X,
    });

    const closeCaseLambda = new Function(this, 'closeCaseFunction', {
      code: new AssetCode(lambdaPath),
      handler: 'close-case.handler',
      runtime: Runtime.NODEJS_12_X,
    });

    const openCase = new Task(this, 'Open Case', {
      task: new InvokeFunction(openCaseLambda),
    });

    const assignCase = new Task(this, 'Assign Case', {
      task: new InvokeFunction(assignCaseLambda),
    });

    const workOnCase = new Task(this, 'Work on Case', {
      task: new InvokeFunction(workOnCaseLambda),
    });

    const escalateCase = new Task(this, 'Escalate Case', {
      task: new InvokeFunction(escalateCaseLambda),
    });

    const closeCase = new Task(this, 'Close Case', {
      task: new InvokeFunction(closeCaseLambda),
    });

    const failed = new Fail(this, 'Fail', {
      cause: 'Failed!!!',
    });

    const isComplete = new Choice(this, 'Is Case Resolved?');

    const chain = Chain.start(openCase)
      .next(assignCase)
      .next(workOnCase)
      .next(
        isComplete
          .when(Condition.numberEquals('$.Status', 1), closeCase)
          .when(Condition.numberEquals('$.Status', 0), escalateCase.next(failed)),
      );

    new StateMachine(this, 'StateMachine', {
      definition: chain,
    });
  }
}
