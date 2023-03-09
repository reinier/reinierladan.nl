const fs = require("fs");
const htmlmin = require("html-minifier");
const pluginRss = require("@11ty/eleventy-plugin-rss");

const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
	
	if (process.env.ELEVENTY_PRODUCTION) {
		eleventyConfig.addTransform("htmlmin", htmlminTransform);
	}
	
	eleventyConfig.setServerOptions({
		// Default values are shown:
		
		// Whether the live reload snippet is used
		liveReload: true,
		
		// Whether DOM diffing updates are applied where possible instead of page reloads
		domDiff: true,
		
		// The starting port number
		// Will increment up to (configurable) 10 times if a port is already in use.
		port: 8080,
		
		// Additional files to watch that will trigger server updates
		// Accepts an Array of file paths or globs (passed to `chokidar.watch`).
		// Works great with a separate bundler writing files to your output folder.
		// e.g. `watch: ["_site/**/*.css"]`
		watch: [],
		
		// Show local network IP addresses for device testing
		showAllHosts: true,
		
		// Use a local key/certificate to opt-in to local HTTP/2 with https
		https: {
			// key: "./localhost.key",
			// cert: "./localhost.cert",
		},
		
		// Change the default file encoding for reading/serving files
		encoding: "utf-8",
	});
	
	// Passthrough
	eleventyConfig.addPassthroughCopy({ "src/static": "." });
	eleventyConfig.addPassthroughCopy('src/_redirects');
	
	// Watch targets
	eleventyConfig.addWatchTarget("./src/styles/");
	
	// <3 https://bnijenhuis.nl/notes/dates-in-eleventy/
	
	// Filters
	eleventyConfig.addFilter("readablePostDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj, {
			zone: "Europe/Amsterdam"
		}).setLocale('nl-NL').toFormat('dd MMMM, yyyy');
	});

	// Filters
	eleventyConfig.addFilter("readablePostDateEN", (dateObj) => {
		return DateTime.fromJSDate(dateObj, {
			zone: "Europe/Amsterdam"
		}).setLocale('en-EN').toFormat('MMMM dd, yyyy');
	});
	
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj, {
			zone: "Europe/Amsterdam"
		}).setLocale('en').toISODate();
	});
	
	// RSS feeds
	eleventyConfig.addPlugin(pluginRss);
	
	var pathPrefix = "";
	if (process.env.GITHUB_REPOSITORY) {
		pathPrefix = process.env.GITHUB_REPOSITORY.split('/')[1];
	}
	
	return {
		dir: {
			input: "src",
		},
		pathPrefix
	}
};

function htmlminTransform(content, outputPath) {
	if (outputPath.endsWith(".html")) {
		let minified = htmlmin.minify(content, {
			useShortDoctype: true,
			removeComments: true,
			collapseWhitespace: true
		});
		return minified;
	}
	return content;
}
