import { RPCProvider, Query, } from "@dojoengine/core";
import { GraphQLClient } from 'graphql-request';

import { getSdk } from '../generated/graphql';

export async function setupNetwork() {
  const { VITE_PUBLIC_WORLD_ADDRESS, VITE_PUBLIC_NODE_URL, VITE_PUBLIC_TORII } = import.meta.env;

  const provider = new RPCProvider(VITE_PUBLIC_WORLD_ADDRESS, VITE_PUBLIC_NODE_URL);
  const createGraphSdk = () => getSdk(new GraphQLClient(VITE_PUBLIC_TORII))

}
