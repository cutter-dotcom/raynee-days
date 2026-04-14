# Decap CMS Setup — Raynee Days

One-time setup to let Raynee edit the shop at `rayneedays.com/admin`.

## Step 1 — Create a GitHub OAuth App

1. Go to https://github.com/settings/developers → **OAuth Apps** → **New OAuth App**
2. Fill in:
   - **Application name:** `Raynee Days CMS`
   - **Homepage URL:** `https://rayneedays.com`
   - **Authorization callback URL:** `https://rayneedays.com/api/callback`
3. Click **Register application**
4. Copy the **Client ID**
5. Click **Generate a new client secret**, copy it (you only see it once)

## Step 2 — Add env vars in Vercel

1. Go to the `site` project in Vercel → Settings → Environment Variables
2. Add two variables (scope: Production + Preview):
   - `OAUTH_GITHUB_CLIENT_ID` = the client ID from step 1
   - `OAUTH_GITHUB_CLIENT_SECRET` = the client secret from step 1
3. Redeploy (or just wait for the next push to trigger a rebuild)

## Step 3 — Give Raynee access

The CMS uses GitHub auth, so Raynee needs to be a **collaborator on the GitHub repo**:

1. Go to https://github.com/cutter-dotcom/raynee-days/settings/access
2. Click **Add people** → invite Raynee's GitHub username (she'll need to make a GitHub account if she doesn't have one — free)
3. She accepts the invite via email

## Step 4 — She uses it

1. Tell Raynee to go to **https://rayneedays.com/admin**
2. Click **Login with GitHub**, approve the OAuth app
3. She can now:
   - Add a new shop item (title, price, upload image, description)
   - Edit or delete existing items
   - Pair a print with a sticker by typing the sticker's slug
4. She clicks **Publish** → Decap commits the change to `main` → Vercel auto-deploys → site updates in ~1 minute

## Editorial workflow

Decap is configured with `publish_mode: editorial_workflow`, which means changes go through **Draft → In Review → Ready → Published**. Raynee can save drafts without publishing. If you want her to skip review and publish immediately, remove that line from `public/admin/config.yml`.

## What the content lives in

All shop items live in `content/shop-items.json`. You can still edit this file directly in code if needed — Decap and Git stay in sync.

Uploaded images go to `public/art/` and are referenced as `/art/filename.png` in the JSON.

## If something breaks

- **"Login failed" on callback:** verify the OAuth callback URL in GitHub is exactly `https://rayneedays.com/api/callback` and env vars are set in Vercel.
- **"Config errors" on /admin:** check `public/admin/config.yml` is valid YAML.
- **Images not showing:** confirm the `image` field starts with `/art/` not `public/art/`.
