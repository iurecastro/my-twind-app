// Import the defineConfig function from Twind to create a configuration object
import { defineConfig } from '@twind/core';

// Define and export the Twind configuration
export default defineConfig({
  theme: {
    extend: {
      // Customize the theme colors
      colors: {
        primary: '#1DA1F2',    // Custom primary color
        secondary: '#14171A',  // Custom secondary color
      },
    },
  },
});
