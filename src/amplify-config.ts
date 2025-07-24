// amplify-config.ts
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports'; // or wherever your config is

export function configureAmplify() {
  Amplify.configure(awsExports);
}
