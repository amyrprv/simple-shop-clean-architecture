import { get } from 'env-var';

export default () => ({
  port: get('PORT').required().asIntPositive(),
  mysql: {
    host: get('DB_HOST').required().asString(),
    port: get('DB_PORT').required().asIntPositive(),
    username: get('DB_USERNAME').required().asString(),
    password: get('DB_PASSWORD').required().asString(),
    database: get('DB_NAME').required().asString(),
  },
});
