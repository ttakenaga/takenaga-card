"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.green("◳  ") + chalk.white("Tomomi Takenaga"),
  work: chalk.white("Project Researcher / Front-end Developer"),
  workPlace: chalk.white("CDRPM, the university of Tokyo Hospital"),
  github: chalk.cyan("https://github.com/utrad-ical/circus"),
  web: chalk.cyan("https://circus-project.net/"),
  npx: chalk.red("npx") + " " + chalk.white("takenaga-card"),
  labelWork: chalk.white.bold("  Work:"),
  labelWorkPlace: chalk.white.bold(" Place:"),
  labelOpenSource: chalk.white.bold("Open Source:"),
  labelnpm: chalk.white.bold("   npm:"),
  labelGitHub: chalk.white.bold("GitHub:"),
  labelWeb: chalk.white.bold("   Web:"),
  labelCard: chalk.white.bold("  Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name}`;
const working = `${data.labelWork}  ${data.work}`;
const at = `${data.labelWorkPlace}  ${data.workPlace}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // Add one whole blank line
  at +
  newline + // data.labelWork + data.work
  githubing +
  newline + // data.labelGitHub + data.github
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
