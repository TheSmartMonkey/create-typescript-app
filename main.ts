import { httpMessage } from './src/functions/hello';

if (require.main === module) {
  console.log('DEBUG: ', httpMessage('hello !'));
}
