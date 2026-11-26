export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
}
