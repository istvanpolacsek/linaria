const { paramCase } = require('change-case');

module.exports = {
  classNameSlug: (hash, title) => paramCase(title),
}
;
