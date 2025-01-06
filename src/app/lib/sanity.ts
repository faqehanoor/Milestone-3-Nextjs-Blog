import { createClient }from '@sanity/client';

const client = createClient({
  projectId: '3m7bkueu',
  dataset: 'production',
  apiVersion: '2024-12-31',
  useCdn: true,
});

export default client;