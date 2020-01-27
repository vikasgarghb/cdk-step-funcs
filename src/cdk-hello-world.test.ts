import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { CdkHelloWorldStack } from './cdk-hello-world-stack';

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkHelloWorldStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT,
    ),
  );
});
