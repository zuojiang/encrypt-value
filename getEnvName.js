var projectName = require('project-name')
var normalizeName = require('normalize-name')

module.exports = function (dir) {
  return normalizeName(projectName(dir) + '_AES').toUpperCase()
}
