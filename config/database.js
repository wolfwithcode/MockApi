module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', 'localDatabase/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
