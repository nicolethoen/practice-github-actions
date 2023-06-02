const package = require('./package.json')

//Example using properties from package.json
if (package.version.includes('prerelease')) {
  console.warn('Warning: This is a prerelease version of PatternFly - please upgrade to a released version.')
}