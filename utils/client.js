import client from "@sanity/client";
import { setConfig } from "next/config";
import config from "./config";

export default client({
  projectId: config.projectId,
  dataset: config.dataset,
  useCdn: true,
});
