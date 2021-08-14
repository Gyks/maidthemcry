import { VK } from 'vk-io';
import { token } from './configs/config';

const vk = new VK({
  token,
});
vk.updates.startPolling();
vk.updates.on('message', (value) => {
  console.info(value);
});
