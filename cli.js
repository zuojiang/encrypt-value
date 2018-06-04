#!/usr/bin/env node

var path = require('path')
var inquirer = require('inquirer')
var argv = require('optimist').argv
var getEnvName = require('./getEnvName')
var encrypt = require('./encrypt')
var pkg = require('./package')

var projectDir = path.resolve(process.cwd(), argv._[0] || '.')
var defaultEnvName = getEnvName(projectDir)

function main () {
  var questions = []
  var envName= argv.N || argv['env-name'] || defaultEnvName
  var secret = process.env[envName]

  if (argv.S || argv['enter-secret'] || !secret) {
    questions.push({
      name: 'secret',
      type: 'password',
      message: 'Please enter your secret key:'
    })
  }

  questions.push({
    name: 'value',
    message: 'Please enter a value:',
  })

  inquirer.prompt(questions).then(function(data){
    console.log(encrypt(data.value, data.secret || secret));
  }, function(err){
    console.error(err.stack || err)
  })
}

if (argv.v || argv.version) {
  console.log(pkg.version);
} else if (argv.h || argv.help) {
  console.log('');
  console.log('Usage: '+pkg.name+' [OPTIONS] [<project_directory>]');
  console.log('');
  console.log('Options:');
  console.log('');
  console.log('\t-N, --env-name <name>\t\tThe environment variable name with a secret key. Default: "<project_name>_AES"');
  console.log('');
  console.log('\t-S, --enter-secret <secret>\tEnter a secret key explicitly.');
  console.log('');
  console.log('\t-v, --version\t\t\tDisplay the version.');
  console.log('');
  console.log('\t-h, --help\t\t\tPrint this help.');
  console.log('');
} else {
  main()
}
