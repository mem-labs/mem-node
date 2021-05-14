<p align="center">
  <a href="https://mem.ai" target="_blank" rel="noopener noreferrer">
    <img width="64" src="https://github.com/mem-labs/mem-node/blob/main/public/logo.svg" alt="Mem logo">
  </a> 
</p>
<h1 align="center">
  Mem Node.js Client
</h1>
<p align="center">
  The Mem Node client provides convenient access to the Mem API from applications written in server-side JavaScript.
</p>
<p align="center">
  <a href="https://github.com/mem-labs/mem-node/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-ISC-blue.svg" alt="mem-node is released under the ISC license." />
  </a>
  <a href="https://github.com/mem-labs/mem-node/actions/workflows/merge.yaml">
    <img src="https://github.com/mem-labs/mem-node/actions/workflows/merge.workflow.yaml/badge.svg" alt="Main branch merge - github action status." />
  </a>
</p>

<br/>

## Installation

Install the package with:

```shell
npm install @mem-labs/mem-node --save
# or
yarn add @mem-labs/mem-node
```

## Usage

These examples show the most common features of the `MemClient`. You'll find more information on the [Mem API documentation website](https://docs.mem.ai).

---

### Initialize the client

```javascript
import { MemClient } from "@mem-labs/mem-node";

const memClient = new MemClient({
  apiKey: "<API_KEY_HERE>"
});
```

---

### Create a mem

```javascript
await memClient.createMem({
  content: "Hello world."
});
```
