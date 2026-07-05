import {handleRequest} from '../edge-functions/index.js'

// for Vercel
export default {
  async fetch(request, env, ctx) {
    return handleRequest(request);
  }
};