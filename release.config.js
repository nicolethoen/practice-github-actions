module.exports = {
  branches: [
    { name: 'main', channel: 'prerelease' },
    { name: 'v2', range: '2.0.x', channel: 'alpha', prerelease: true}
  ],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    ['@semantic-release/npm', { pkgRoot: 'dist' }]
  ],
  tagFormat: 'prerelease-v${version}'
};
