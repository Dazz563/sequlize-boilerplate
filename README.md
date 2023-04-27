# Sequelize CLI for migrations

Run `npm i -D sequelize-cli`

-   Installs the package.

Run `npx sequelize-cli init`

-   This will install the config.json file, model migrations and seeder folders.

# Generating models & migrations

Run `npx sequelize-cli model:generate --name Product --attributes name:string,description:string,longDescription:text,price:float,image:string`

-   This creates a new model and migration file
