addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */

const links =
  [
    { "name": "LinkedIn", "url": "https://www.linkedin.com/in/aniketsoni/" },
    { "name": "Github", "url": "https://github.com/aniketsoni1" },
    { "name": "Twitter", "url": "https://www.twitter.com/aniketsoni"}
  ]

async function handleRequest(request) {
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
    links,
  })
}
