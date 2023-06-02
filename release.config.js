module.exports = {
  branches: [
    'release',
    { name: 'v4', channel: 'prerelease-v4', range: '4.x' }
  ],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github'
  ],
  tagFormat: 'prerelease-v${version}'
};
