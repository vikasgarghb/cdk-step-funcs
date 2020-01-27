import { Stack, Construct, StackProps } from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';

export class CdkHelloWorldStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new Bucket(this, 'MyFirstBucket', {
      versioned: true
    });
  }
}
