module.exports = {
  branches: [
    'v2',
    { name: 'v2', range: '2.0.x', channel: 'alpha', prerelease: true}
  ],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/github',
    '@semantic-release/npm'
  ],
  tagFormat: 'prerelease-v${version}'
};
