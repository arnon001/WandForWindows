const { exec } = require("node:child_process");
const fs = require("node:fs");
const firstRun = 'C:/CPPS/firstrun'
if (!fs.existsSync(firstRun)) {
    console.log("Hi there, I detected this is your first run!, I'm going to install everything quick.");
    exec('mkdir C:/CPPS');
    exec('cd C:/CPPS');
    exec('curl -s -o git.zip https://github.com/git-for-windows/git/releases/download/v2.44.0.windows.1/PortableGit-2.44.0-64-bit.7z.exe');
}