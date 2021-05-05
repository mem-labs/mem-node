# Mem API
Official Node.js client for the Mem API

## Step 1: Install

```
npm install mem-api
```
or
```
yarn add mem-api
```

## Step 2: Copy & paste some code!

```js
import MemClient from "mem-api";

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
