var gulp = require('gulp')
var plugin = require('./')()
var pluginTasks = require('alchemist-gulp')

pluginTasks(gulp, { name: 'lab' })
