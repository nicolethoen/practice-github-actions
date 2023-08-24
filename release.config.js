module.exports = {
  branches: [
    'do-not-delete',
    { name: 'v4', channel: 'prerelease-v4', range: '4.x' },
    { name: 'main', channel: 'prerelease', prerelease: 'prerelease' },
    { name: '5.4.x', channel: 'prerelease-bugfix', range: '5.4.x'}
  ],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "angular",
        "releaseRules": [
          { type: "feat", release: "patch" },
          { type: "fix", release: "patch" }
        ]
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github'
  ],
  tagFormat: 'patch-v${version}',
  dryRun: true
};
