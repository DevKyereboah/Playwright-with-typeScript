import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testMatch: ["tests/**/*.test.ts"],
  // use: {
  //   headless: false,
  // },

});
