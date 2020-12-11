module.exports = {
  development: {
      client: 'sqlite3',
      useNullAsDefault: true, // needed for sqlite
      connection: {
        filename: './data/test.db3',
        typeCast: function(field, next) {
          if (field.type === 'TINY' && field.length === 1) {
              return (field.string() == '1'); // 1 = true, 0 = false
          }
          return next();
        },
      },
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      },
  },
};
