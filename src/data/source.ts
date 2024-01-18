import LambdaHandlerImage from '../assets/lambda_handler.png'

export type Card = {
  front: string;
  back: string;
  image?: string;
  category: 'development' | 'security' | 'database';
};

export const cards: Card[] = [
  {
    front: 'What is the rotation interval for AWS-managed KMS keys?',
    back: '1 year',
    category: 'security',
  },
  {
    front: 'What AWS service can be used to audit a KMS Key usage?',
    back: 'CloudTrail',
    category: 'security',
  },
  {
    front: 'What is the maximum execution duration for an Express Step Function?',
    back: '5 minutes',
    category: 'development',
  },
  {
    front: 'What infrastructure creation tool is utilized by AWS SAM?',
    back: 'CloudFormation',
    category: 'development',
  },
  {
    front: 'What is the maximum execution duration for a Standard Step Function?',
    back: '1 year',
    category: 'development',
  },
  {
    front: 'Where are AWS CodeBuild artifacts stored?',
    back: 'S3',
    category: 'development',
  },
  {
    front: 'How can you enable different origins from making requests to your API Gateway?',
    back: 'Enable CORS',
    category: 'development',
  },
  {
    front: 'What property can you use to get only specified fields from a DynamoDB query?',
    back: 'ProjectionExpression',
    category: 'database',
  },
  {
    front: 'What is the maximum execution duration for a Lambda function?',
    back: '15 minutes',
    category: 'development',
  },
  {
    front: 'What is the simplest way to delete old items from a DynamoDB table?',
    back: 'Set a TTL',
    category: 'database',
  },
  {
    front: 'What is the default concurrency limit for Lambda functions in an AWS account for the same region?',
    back: '1000',
    category: 'development',
  },
  {
    front: `
What is the maximum number of concurrent executions that can be reserved for all Lambda functions in a region + account combination 
using the default concurrency limit?`,
    back: '900',
    category: 'development',
  },
  {
    front: `Is the following Lambda function following good practices in terms of client initialization?`,
    back: 'Yes. The client is initialized outside of the handler function.',
    category: 'development',
    image: LambdaHandlerImage,
  }
];
