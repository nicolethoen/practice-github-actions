module.exports = {
  branches: [
    'v3-old',
    { name: 'v3-old', channel: 'prerelease' },
    { name: 'main', channel: 'alpha', prerelease: 'alpha'}
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
