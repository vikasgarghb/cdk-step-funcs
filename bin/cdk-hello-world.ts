#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { CdkHelloWorldStack } from '../src/cdk-hello-world-stack';

const app = new App();
new CdkHelloWorldStack(app, 'CdkHelloWorldStack');
