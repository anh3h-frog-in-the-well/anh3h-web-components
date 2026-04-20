import { federation } from "@module-federation/vite";
import { defineConfig } from 'vite';

export default defineConfig((config) => {
  const isProduction = config.mode === 'production';
  return { 
    plugins: [
        federation({
          dts: false,
          name: "host",
          remotes: {
            remote: {
              type: "module",
              name: "remote-components",
              entry: isProduction ? "http://localhost:88/remoteEntry.js" : "http://localhost:3001/remoteEntry.js",
              entryGlobalName: "remote",
              shareScope: "default",
            },
          },
          exposes: {},
          shared: {
            lit: { 
              singleton: true
            },
          },
        }),
      ],
  }
})

