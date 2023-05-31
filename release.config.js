module.exports = {
  branches: [
    'main',
    { name: 'v4', channel: 'prerelease', range: '4.x' },
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
