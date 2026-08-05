import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

// Fill in with the Project ID shown at https://sanity.io/manage after
// creating the project — see README "Setup CMS (Sanity)".
const projectId = 'REPLACE_WITH_PROJECT_ID'
const dataset = 'production'

export default defineConfig({
  name: 'default',
  title: 'Sarongan Geowisata — Berita',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
