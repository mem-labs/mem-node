import { MemClient } from "./index";

const memClient = new MemClient({ apiKey: "<API_KEY_HERE>" });

memClient.createMem({
  content: "Hello world."
});

memClient.batchCreateMems([
  {
    content: "Hello world #1."
  },
  {
    content: "Hello world #2."
  }
]);
