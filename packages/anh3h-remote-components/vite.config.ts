
import { defineConfig } from 'vite';
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
        federation({
          dts: false,
          filename: "remoteEntry.js",
          name: "remote",
          exposes: {
            "./remote-button": "./src/my-remote-button.ts",
          },
          remotes: {
          },
          shared: {
            lit: { 
              singleton: true 
            },
            "lit-html": { 
              singleton: true 
            }
          },
        })
      ],
})

