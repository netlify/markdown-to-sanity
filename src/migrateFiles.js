const globMDFiles = require('./globMDFiles')
const extractMDfromFile = require('./extractMDfromFile')
const convertMDtoVFile = require('./convertMDtoVFile')
const convertToSanityDocument = require('./convertToSanityDocument')
const Bottleneck = require("bottleneck");


const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 800
});

const wrapped = limiter.wrap(convertToSanityDocument);

async function migrateFiles (inputPath, filename, outputPath) {
  const files = await globMDFiles(inputPath)
  const mdDocuments = await Promise.all(files.map(extractMDfromFile))
  const VFiles = await Promise.all(mdDocuments.map(convertMDtoVFile))
  const sanityDocuments = await Promise.all(VFiles.map(wrapped))
  return sanityDocuments
}

module.exports = migrateFiles
