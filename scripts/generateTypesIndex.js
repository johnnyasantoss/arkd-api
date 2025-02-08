const fs = require("node:fs");
const path = require("node:path");

/**
 * This script creates an index.ts file in the types directory that exports all
 * types from the files in each subdirectory. This is useful for importing types
 * from the types directory without having to specify the file name, as well as
 * allowing us to export all generated types from the top level package.
 */

const TYPES_DIR = "./src/types";

// Get all subdirectories in the types directory
const subDirs = fs
  .readdirSync("./src/types", { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

// Get all files in each subdirectory
const filePaths = subDirs.flatMap((subDir) => {
  const filesInSubDir = fs
    .readdirSync(`${TYPES_DIR}/${subDir}`, {
      withFileTypes: true,
      recursive: true,
    })
    .filter(
      (f) =>
        // either a dir with barrel file
        (f.isDirectory() && fs.existsSync(path.join(f.name, "index.ts"))) ||
        // or its sub files
        (f.isFile() && path.extname(f.name) === ".ts")
    )
    .sort()
    .filter((f, i, arr) => !arr.includes(f, i + 1));

  // returns a relative path to TYPES_DIR for all files under subfolders
  return filesInSubDir.map((file) => {
    return path.relative(
      TYPES_DIR,
      path.join(file.parentPath, file.name.replace(".ts", ""))
    );
  });
});

// Create index.ts file in types directory exporting all types from the files
// in each subdirectory
const content = filePaths
  .map((filePath) => `export * from './${filePath}';`)
  .join("\n");
fs.writeFileSync(`${TYPES_DIR}/index.ts`, content);

console.info(
  `Generated barrel file for proto generated files in ${TYPES_DIR}.`
);
