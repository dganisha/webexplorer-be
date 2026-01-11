# Backend API for Windows Explorer

## Details
This application using : 

- Node.js + Express
- PostgreSQL


## Project setup
```
npm install
```

## Setting Environment
open file `.env` and setting your database connection

## Setting Database
You can restore database from `database/dump_db.sql` 

_______
or can running migrations

Please modified database connection in file `config/config.json` and running:
```
npx sequelize-cli db:migrate
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```


