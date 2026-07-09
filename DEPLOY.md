# Deploying to Cloudflare Workers

This project is a TanStack Start app with SSR, built through Nitro's
`cloudflare-module` preset. It runs on Cloudflare Workers (not Pages,
not GitHub Pages — those don't support the SSR runtime this app needs).

The repo is already wired for automatic deploys on every push to `main`
via GitHub Actions. You just need to do the one-time setup below.

## 1. Create a Cloudflare API token

1. Go to https://dash.cloudflare.com/profile/api-tokens → **Create Token**.
2. Use the **Edit Cloudflare Workers** template.
3. Under "Account Resources" pick your account. Under "Zone Resources"
   pick `hallett.life` (needed so the Worker can bind to a route on
   that zone).
4. Create the token and copy the value — you won't see it again.

Also grab your **Account ID** from the Cloudflare dashboard sidebar
(any Workers page shows it on the right).

## 2. Add the two secrets to GitHub

In the GitHub repo → **Settings → Secrets and variables → Actions →
New repository secret**:

- `CLOUDFLARE_API_TOKEN` — the token from step 1.
- `CLOUDFLARE_ACCOUNT_ID` — your account ID.

## 3. First deploy

Push any commit to `main` (or run the workflow manually from the
**Actions** tab → **Deploy to Cloudflare Workers** → **Run workflow**).

The workflow will:

1. `bun install`
2. `bun run build` — Nitro produces the Worker bundle in `dist/` and
   writes a merged `dist/wrangler.json`.
3. `wrangler deploy` from `dist/`.

The Worker will appear in your Cloudflare dashboard as
`public-value-connect` (change the name in `wrangler.toml` if you'd
rather use something else). Its default URL will be
`https://public-value-connect.<your-subdomain>.workers.dev`.

## 4. Point hallett.life/public-value-connect at the Worker

Two things to do in the Cloudflare dashboard for the `hallett.life`
zone:

### a) Remove the redirect loop

Right now `https://hallett.life/public-value-connect/` returns a 301 to
itself, forever. That's a Page Rule or Bulk Redirect on your
`hallett.life` zone. Find it under **Rules → Redirect Rules** (and
**Rules → Page Rules** for the legacy version) and delete or fix the
rule that targets `/public-value-connect`. Nothing else will work
until this is removed.

### b) Bind the Worker to the route

Option A — via `wrangler.toml` (recommended, deploys via git):

Uncomment the `[[routes]]` block in `wrangler.toml`:

```toml
[[routes]]
pattern = "hallett.life/public-value-connect/*"
zone_name = "hallett.life"
```

Commit and push. The next deploy binds the route automatically.

Option B — via the dashboard:

**Workers & Pages → public-value-connect → Settings → Triggers →
Add route**, pattern `hallett.life/public-value-connect/*`, zone
`hallett.life`.

## 5. Base path

The app currently serves from `/`, not `/public-value-connect/`. When
you bind the Worker to `hallett.life/public-value-connect/*`,
Cloudflare passes the full path through, so requests arrive as
`/public-value-connect/role` rather than `/role`. TanStack Router
won't match those.

You have two options:

- **Recommended:** serve the app from the apex path — bind the Worker
  to `hallett.life/*` (or a subdomain like `appointments.hallett.life/*`)
  instead of a subpath. No code changes needed.
- **Or:** rewrite the incoming path in the Worker to strip
  `/public-value-connect` before TanStack Start sees it. That's a small
  change to `src/server.ts`; ask and I'll add it.

## Local preview of the Worker build

```bash
bun run build
bunx wrangler dev dist/server/index.mjs --assets dist/client
```
