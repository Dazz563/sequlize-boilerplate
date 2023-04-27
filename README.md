# Sequelize CLI for migrations

Run `npm i -D sequelize-cli`

-   Installs the package.

Run `npx sequelize-cli init`

-   This will install the config.json file, model migrations and seeder folders.

# Generating models & migrations

Run `npx sequelize-cli model:generate --name Product --attributes name:string,description:string,longDescription:text,price:float,image:string`

-   This creates a new model AND migration file.

# Running migrations

run `npx sequelize-cli db:migrate`

-   This will migrate.

run `npx sequelize-cli db:migrate:undo`

-   Rollsback the migration.

run `npx sequelize-cli db:migrate:undo:all`

-   Rollsback all migrations.

# Generate migration only (altering existing models)

run `npx sequelize-cli migration:generate --name user-inactive-column`

# Generating seeders

run `npx sequelize-cli seed:generate --name add-products`

-   Generates the seeder.

run `npx sequelize-cli db:seed:all`

-   Will run all seeders.

run `npx sequelize-cli db:seed:undo`

-   Will undo all seeders.

run `npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data`

-   Will undo specific seeder.
