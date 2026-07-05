import { handleRequest } from '../edge-functions/index.js';

// for Vercel
export default async function handler(req, res) {
  try {
    const host = req.headers.host || 'localhost';
    const url = `https://${host}${req.url || '/'}`;
    const request = new Request(url, {
      method: req.method || 'GET',
      headers: req.headers,
    });

    const response = await handleRequest(request);
    res.statusCode = response.status;

    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const body = Buffer.from(await response.arrayBuffer());
    res.end(body);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Internal Server Error');
  }
}