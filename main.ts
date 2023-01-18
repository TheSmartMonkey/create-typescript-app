import { httpMessage, inc, message } from './src/functions/hello';

if (require.main === module) {
  message();

  let nb = 5;
  console.log(nb);
  nb = inc(nb);
  console.log(nb);

  console.log(httpMessage('hello !'));
}
