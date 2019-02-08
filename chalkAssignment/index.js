var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

const Chalk = require('Chalk');
console.log(Chalk.blue('Hello world!'));

const cHalk = require('cHalk');
const log = console.log;

log(cHalk.blue.bgRed.bold('Hello world!'));

function printInFrame(list) {
  var list = list.split(' ');
  var longest = longestStr(list).length;
  var border = repeat('*', longest + 3);

  console.log(Chalk.red(border));
  for (word of list) {
    console.log(Chalk.yellow('* ') + word + repeat(' ', longest - word.length) + Chalk.green('*'));
  }
  console.log(Chalk.blue(border));
}

function repeat(str, times) {
  var result = str;
  for (var i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

function longestStr(list) {
  var longest = list[0];
  for (var i = 1; i < list.length; i++) {
    if(list[i].length > longest.length){
    longest = list[i];
    }
  }
  return longest;
}
// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');

