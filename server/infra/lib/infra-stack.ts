import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'path';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // This creates the Lambda function
    const myLambda = new NodejsFunction(this, 'MyPortfolioBackend', {
      memorySize: 1024,
      timeout: cdk.Duration.seconds(30),
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'handler', // Ensure your index.ts has "export const handler = ..."
      entry: path.join(__dirname, '../../index.ts'), // Points to your TS file in the parent folder
      bundling: {
        minify: true,
        externalModules: ['aws-sdk'], // Keep the bundle small
      },
    });

    // Optional: Output the Lambda Name to the terminal
    new cdk.CfnOutput(this, 'LambdaName', {
      value: myLambda.functionName,
    });
  }
}