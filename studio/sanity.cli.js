import { defineCliConfig } from 'sanity/cli'

// Same Project ID/dataset as sanity.config.js — the CLI (login, cors, deploy)
// reads this file to know which Sanity project it's talking to.
const projectId = 'REPLACE_WITH_PROJECT_ID'
const dataset = 'production'

export default defineCliConfig({
  api: { projectId, dataset },
})
