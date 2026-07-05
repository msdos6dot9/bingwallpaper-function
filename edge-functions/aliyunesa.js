import {handleRequest} from './index.js'

// for Aliyun ESA
export default {
  async fetch(request, env, ctx) {
    return handleRequest(request);
  }
};