import type { Config } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp";

const config: Config = {
    content: ["./src/**/*.{ts,tsx}"],
    plugins: [lineClamp],
};

export default config;
