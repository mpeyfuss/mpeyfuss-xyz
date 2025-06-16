import { DateTime } from "luxon";

export default async function (eleventyConfig) {
  // copy assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // add blog collection
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("blog")
      .filter((item) => item.data.published)
      .sort((a, b) => b.date - a.date);
  });

  // add tech collection
  eleventyConfig.addCollection("tech", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("tech")
      .filter((item) => item.data.published)
      .sort((a, b) => b.date - a.date);
  });

  // add portfolio collection
  eleventyConfig.addCollection("portfolio", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("portfolio")
      .filter((item) => item.data.published)
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
