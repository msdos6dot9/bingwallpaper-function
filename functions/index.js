import { handleRequest } from '../edge-functions/index.js';

// for Cloudflare Pages Functions
export default async function onRequest(context) {
  return await handleRequest(context.request);
}