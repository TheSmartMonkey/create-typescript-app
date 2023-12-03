import { logger } from '@common/logger';
import { httpMessage, inc, message } from './src/modules/hello';

if (require.main === module) {
  message();

  let nb = 5;
  logger.info(nb);
  nb = inc(nb);
  logger.info(nb);

  logger.info(httpMessage('hello !'));
}
