module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/_static');
  // Config files > redirected from config folder to src on build
  eleventyConfig.addPassthroughCopy({
    'src/config': './',
  });

  eleventyConfig.addCollection('blog', collection => {
    return collection.getFilteredByGlob('src/blog/*.md');
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: 'includes',
      data: '_data',
    },
    templateFormats: ['liquid', 'html', 'css', 'md'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    passThroughFileCopy: true,
  };
};
