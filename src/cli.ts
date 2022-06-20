#!/usr/bin/env node
import yargs from "yargs";

yargs
    .scriptName('clitool4Farmfill')
    .usage("$0 run [args]")
    .command('run [options]', 'Run the script', (_) => {
    }, (argv) => {
        if(argv.benchmark) {
            console.log('Benchmark')
        }
        if(argv.plans) {
            console.log(`plans ${argv.plans}`)
        }
        if(argv.years) {
            console.log(`years ${argv.years}`)
        }
    })
    .option('benchmark', {
        alias: 'b',
        type: 'boolean',
        description: 'Run in Benchmark Mode'
    })
    .option('plans', {
        alias: 'p',
        type: 'number',
        description: 'Run the tool for X plans (for the eventually specified years)'
    })
    .option('years', {
        alias: 'y',
        type: 'number',
        description: 'Run the tool for X years'
    })
    .help()
    .argv;