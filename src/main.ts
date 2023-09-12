import { decodeTransfersInBlock } from "./listener.ts";
import { MONGO_CONNECTION_STRING } from "./utils/constants.ts";
import { Block } from "./deps.ts";
import filter from "./filter.ts";

export const config = {
  streamUrl: Deno.env.get("STREAM_URL"),
  startingBlock: Number(Deno.env.get("STARTING_BLOCK")),
  network: "starknet",
  filter,
  sinkType: "mongo",
  sinkOptions: {
    connectionString: MONGO_CONNECTION_STRING,
    database: "sales",
    collectionName: "sales",
    entityMode: false,
  },
};

export default function transform(block: Block) {
  return decodeTransfersInBlock(block);
}
