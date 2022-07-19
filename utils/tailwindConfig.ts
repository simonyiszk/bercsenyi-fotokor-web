const resolveConfig = require("tailwindcss/resolveConfig");
import tailwindConfig from "@/tailwind.config.js";
import type { Config } from "tailwindcss";

export const fullConfig: Config = resolveConfig(tailwindConfig);
