# Mem API
Official Node.js client for the Mem API

## Step 1: Install

```
npm install @mem-labs/mem-node
```
or
```
yarn add @mem-labs/mem-node
```

## Step 2: Copy & paste some code!

```js
import { MemClient } from "@mem-labs/mem-node";

const memClient = new MemClient({
  apiKey: "<API_KEY_HERE>"
});

const main = async () => {
  await memClient.createMem({
    content: "Hello world."
  });

  await memClient.batchCreateMems([
    {
      content: "Hello world #1."
    },
    {
      content: "Hello world #2."
    }
  ]);
};

main();
```
