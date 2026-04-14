import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Decap CMS OAuth callback.
 *
 * Flow:
 * 1. User clicks "Login with GitHub" in Decap CMS at /admin
 * 2. /api/auth redirects them to GitHub
 * 3. GitHub redirects back here with ?code=...&state=...
 * 4. We exchange the code for an access token
 * 5. We postMessage the token back to the CMS window (which is waiting via window.opener)
 */
export async function GET(req: NextRequest) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: "GitHub OAuth env vars not configured" },
      { status: 500 }
    );
  }

  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");
  const cookieState = req.cookies.get("decap_oauth_state")?.value;

  if (!code) {
    return htmlError("Missing code param");
  }
  if (!state || !cookieState || state !== cookieState) {
    return htmlError("OAuth state mismatch — please try logging in again.");
  }

  // Exchange code for token
  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const tokenJson = await tokenRes.json();

  if (tokenJson.error || !tokenJson.access_token) {
    return htmlError(
      `GitHub token exchange failed: ${tokenJson.error_description || tokenJson.error || "unknown error"}`
    );
  }

  const payload = {
    token: tokenJson.access_token as string,
    provider: "github",
  };

  // Decap CMS listens for postMessage events in this format
  const html = `<!DOCTYPE html>
<html>
<head><title>Authenticating…</title></head>
<body>
<script>
  (function() {
    function receiveMessage(e) {
      window.opener.postMessage(
        'authorization:github:success:${JSON.stringify(payload).replace(/'/g, "\\'")}',
        e.origin
      );
      window.removeEventListener('message', receiveMessage, false);
    }
    window.addEventListener('message', receiveMessage, false);
    window.opener.postMessage('authorizing:github', '*');
  })();
</script>
<p>Authenticating with GitHub… you can close this window if it doesn't close automatically.</p>
</body>
</html>`;

  const res = new NextResponse(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
  res.cookies.delete("decap_oauth_state");
  return res;
}

function htmlError(message: string) {
  return new NextResponse(
    `<!DOCTYPE html><html><body><h1>Login failed</h1><p>${message}</p><p><a href="/admin/">Back to admin</a></p></body></html>`,
    {
      status: 400,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    }
  );
}
