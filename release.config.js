module.exports = {
  branches: [
    'main',
    { name: 'v4', channel: 'prerelease', range: '4.x' },
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
  tagFormat: 'alpha-v${version}',
  dryRun: 'true'
};
