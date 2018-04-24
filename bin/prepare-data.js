#!/usr/bin/env node
const {join} = require('path')

const prepareData = require('../lib/prepare-data')

const DATA_DIR = join(__dirname, '..', 'data')
const BAN_PATH = join(DATA_DIR, 'BAN_licence_gratuite_repartage_54.zip')
const BANO_PATH = join(DATA_DIR, 'bano-54.csv.gz')
const CADASTRE_PATH = join(DATA_DIR, 'adresses-cadastre-54.ndjson.gz')
const ADDOK_FILE_PATH = join(DATA_DIR, 'addok-source-files', '54.ndjson.gz')

prepareData({banPath: BAN_PATH, banoPath: BANO_PATH, cadastrePath: CADASTRE_PATH, importInMongo: false, addokFilePath: ADDOK_FILE_PATH})
  .catch(err => {
    console.error(err)
    process.exit(1)
  })