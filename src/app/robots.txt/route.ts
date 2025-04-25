// src/app/robots.txt/route.ts
export function GET() {
    const body = `
  User-agent: *
  Disallow:
  
  Sitemap: https://rychardryan.com.br/sitemap.xml
    `.trim();
  
    return new Response(body, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  