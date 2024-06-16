import { Novu } from '@novu/node';

const novu = new Novu({
  apiKey: process.env.NOVU_API_KEY,
});

export default defineEventHandler(async (event) => {
  console.log(`Received event: ${event}`);

  const body = await readBody(event);

  await novu.trigger('untitled', {
    to: {
      subscriberId: body.subscriberId,
    },
    payload: {}
  });
});
