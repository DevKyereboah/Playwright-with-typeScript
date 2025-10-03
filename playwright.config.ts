import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testMatch: ["tests/**/*.test.ts"],
  use: {
    headless: false,
    screenshot: "on",
    video: "on",
  },
  retries: 2,
  reporter: [
    ["dot"],
    ["json", { outputFile: "jsonReports/jsonReport.json" }],
    ["html", { open: "never" }]
  ]

});
