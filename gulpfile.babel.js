import gulp from 'gulp'
import AlchemistRegistry from 'alchemist-gulp'
import pkg from './package.json'

gulp.registry(new AlchemistRegistry({ package: pkg }))
