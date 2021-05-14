import repl, { ReplOptions } from "repl";
import { MemClient } from "../../entry";

const replOptions: ReplOptions = {
  prompt: "[mem-node]> ",
  useGlobal: true,
};

const startRepl = async () => {
  const replServer = repl.start(replOptions);

  replServer.context.MemClient = MemClient;
};

startRepl();
