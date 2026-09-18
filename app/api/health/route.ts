// return http 200 for health check
export async function GET() {
  return new Response('OK', { status: 200 });
}