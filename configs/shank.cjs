const path = require("path");
const { generateIdl } = require("@metaplex-foundation/shank-js");

const idlDir = path.join(__dirname, "..", "idls");
const binaryInstallDir = path.join(__dirname, "..", ".crates");
const programDir = path.join(__dirname, "..", "programs");

generateIdl({
  generator: "shank",
  programName: "mpl_system_extras",
  programId: "149cwWDejFyWi7Hw5hMBGPK4NgfsyUnYrRKbdKeTqSoy",
  idlDir,
  binaryInstallDir,
  programDir: path.join(programDir, "system-extras"),
});

generateIdl({
  generator: "shank",
  programName: "mpl_token_extras",
  programId: "CdwX7hs6SNGAVwD6xithEiyBA7TPGiGuxTRYs8LGwrq4",
  idlDir,
  binaryInstallDir,
  programDir: path.join(programDir, "token-extras"),
});
