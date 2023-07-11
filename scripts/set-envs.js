const { writeFileSync, mkdirSync } = require("fs");

require("dotenv").config();

const targetPath = "src/environments/environments.ts";

const path = "./src/environments";

const envFileContent = `

export const environments = {
  baseUrl: "${process.env["URL"]}"
};

`;

mkdirSync(path, { recursive: true });

writeFileSync(targetPath, envFileContent);
