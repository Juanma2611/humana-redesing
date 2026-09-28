import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./env";

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: "humana-ecuador",
  deployment: { appId: "f56ykcn54qdqaigv5f4iqety", autoUpdates: false },
});
