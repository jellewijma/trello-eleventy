const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });
  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
