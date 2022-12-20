module.exports = {
  branches: [
    'main',
    { name: 'main', channel: 'prerelease' },
    { name: 'v3-old', channel: '3.x', range: '3.x'}
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
