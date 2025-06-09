import { DateTime } from "luxon";

export default async function (eleventyConfig) {
  // copy assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // add blog collection
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("blog")
      .sort((a, b) => b.date - a.date);
  });

  // add art + tech collection
  eleventyConfig.addCollection("art_and_tech", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("art+tech")
      .sort((a, b) => b.date - a.date);
  });

  // add portfolio collection
  eleventyConfig.addCollection("portfolio", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("portfolio")
      .sort((a, b) => b.date - a.date);
  });

  // add date filter
  eleventyConfig.addFilter("date", (dateObj, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
}
