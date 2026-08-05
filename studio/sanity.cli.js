import { defineCliConfig } from 'sanity/cli'

// Same Project ID/dataset as sanity.config.js — the CLI (login, cors, deploy)
// reads this file to know which Sanity project it's talking to.
const projectId = 'wpwxci05'
const dataset = 'production'

export default defineCliConfig({
  api: { projectId, dataset },
  // Lets `npx sanity deploy` redeploy https://infosarongan.sanity.studio
  // without prompting for the application id every time.
  deployment: {
    appId: 'yi997d7w5q4dwr32glr8bc3k',
  },
})
