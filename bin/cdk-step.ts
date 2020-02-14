#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { CdkLambdaStack } from '../src/CdkLambdaStack';

const app = new App();
new CdkLambdaStack(app, 'CdkLambdaStack');
