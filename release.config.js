module.exports = {
  branches: [
    'main',
    { name: 'main', channel: 'prerelease' },
    { name: 'v2', channel: 'alpha', prerelease: true}
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
