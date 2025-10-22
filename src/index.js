import { VLESS } from 'https://cdn.skypack.dev/@v2ray/v2ray-workers';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const vless = new VLESS({
    uuid: 'your-uuid', // بعداً می‌تونی تغییرش بدی
    hostname: 'vpn-bot.alibodama.workers.dev',
    port: 443
  });
  return vless.handleRequest(request);
}
