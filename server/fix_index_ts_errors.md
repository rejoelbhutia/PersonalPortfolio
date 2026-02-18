# Fixing TypeScript Errors in `server/index.ts`

Running `npx tsc --noEmit` produced **7 errors**. Here's what went wrong and how each was fixed.

---

## Error #1 — `TS6059`: `index.ts` is not under `rootDir`

**Message:** `File 'index.ts' is not under 'rootDir' 'src'. 'rootDir' is expected to contain all source files.`

**Cause:** `tsconfig.json` had `"rootDir": "./src"`, but `index.ts` lives at the project root (`server/index.ts`), not inside `src/`.

**Fix:** Changed `rootDir` from `"./src"` to `"."`.

```diff
- "rootDir": "./src",
+ "rootDir": ".",
```

---

## Errors #2 & #5 — `TS1259`: Default import needs `esModuleInterop`

**Message:** `Module 'express' / 'serverless-http' can only be default-imported using the 'esModuleInterop' flag`

**Cause:** `express` and `serverless-http` are CommonJS modules. Using `import x from 'module'` syntax with CommonJS requires `esModuleInterop`.

**Fix:** Added `"esModuleInterop": true` to `tsconfig.json`.

```diff
  "module": "commonjs",
+ "esModuleInterop": true,
```

---

## Error #3 — `TS7016`: No declaration file for `cors`

**Message:** `Could not find a declaration file for module 'cors'.`

**Cause:** The `cors` package doesn't ship its own TypeScript types. The separate `@types/cors` package was not installed.

**Fix:** Installed the missing types:

```bash
npm install --save-dev @types/cors
```

---

## Error #4 — `TS1192`: `dotenv` has no default export

**Message:** `Module 'dotenv' has no default export.`

**Cause:** Same root cause as #2 — `dotenv` is a CommonJS module requiring `esModuleInterop` for `import dotenv from 'dotenv'` syntax.

**Fix:** Already resolved by adding `"esModuleInterop": true` (same fix as errors #2 & #5).

---

## Errors #6 & #7 — `TS2307`: Cannot find module `./routes/contact` / `./routes/quotes`

**Message:** `Cannot find module './routes/contact' or its corresponding type declarations.`

**Cause:** The route files exist at `src/routes/contact.js` and `src/routes/quotes.js`, but `index.ts` (at the project root) was importing from `./routes/` instead of `./src/routes/`. Also, the files are `.js` and TypeScript needed `allowJs` to import them.

**Fix (two parts):**

1. Fixed the import paths in `index.ts`:

```diff
- import contactRoutes from './routes/contact';
- import quoteRoutes from './routes/quotes';
+ import contactRoutes from './src/routes/contact';
+ import quoteRoutes from './src/routes/quotes';
```

2. Added `"allowJs": true` in `tsconfig.json` so TypeScript can import `.js` files:

```diff
  "module": "commonjs",
  "esModuleInterop": true,
+ "allowJs": true,
```

---

## Summary of All Changes

| File | Change |
|------|--------|
| `tsconfig.json` | `rootDir`: `"./src"` → `"."` |
| `tsconfig.json` | Added `"esModuleInterop": true` |
| `tsconfig.json` | Added `"allowJs": true` |
| `index.ts` | Import paths: `./routes/` → `./src/routes/` |
| `package.json` | Installed `@types/cors` dev dependency |

## Verification

```bash
npx tsc --noEmit
# Output: (no errors)
```

✅ **All 7 errors resolved. Clean compile.**
