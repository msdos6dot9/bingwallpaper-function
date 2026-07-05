import { handleRequest } from '../edge-functions/index.js';

// for Cloudflare Pages Functions
export function onRequest(context) {
  return new Response("Hello, world!");
}