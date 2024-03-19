import { startLocalRegistry } from '@nx/js/plugins/jest/local-registry.js';

const storage = './tmp/local-registry/storage';

startLocalRegistry({
  localRegistryTarget: 'local-registry',
  storage,
  verbose: true,
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
