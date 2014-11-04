#!/usr/bin/env node

var critical = require('critical');

critical.generateInline({
    // Your base directory
    base: './',

    // HTML source
    src: 'index.html',

    // Your CSS Files (optional)
    css: ['./main.css'],

    // Viewport width
    width: 320,

    // Viewport height
    height: 480,

    // Target for final HTML output
    htmlTarget: 'index-critical.html',

    // Target for generated critical-path CSS (which we inline)
    styleTarget: 'generated-main.css',

    // Minify critical-path CSS when inlining
    minify: true,

    // Extract inlined styles from referenced stylesheets
    extract: true
});
