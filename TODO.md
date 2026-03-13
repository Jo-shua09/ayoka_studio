# MIME Type Fix TODO

## Steps:

- [x] Step 1: Edit index.html - Change script src from "/src/main.tsx" to "./src/main.tsx"
- [x] Step 2: Update vercel.json - Add MIME headers for .js files
- [ ] Step 3: Update vite.config.ts - Add explicit base: '/'
- [ ] Step 4: Run `npm run build` and verify dist/index.html script src
- [ ] Step 5: Run `npm run preview` to test prod build locally
- [ ] Step 6: Deploy to Vercel and test (clear cache)
- [ ] Complete: Remove TODO.md
