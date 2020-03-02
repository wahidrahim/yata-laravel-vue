```
git clone git@github.com:wahidrahim/yata-laravel-vue.git
cd yata-laravel-vue

# Setup Laravel api
cd api
composer install
php artisan serve
cd .. # Go back to directory root
docker-compose up -d db # Start mysql database
cd api
php artisan migrate:fresh # Create todos table

# Setup Vue client
cd ../client
yarn
yarn serve # Start Vue app

# Visit http://localhost:8080
```
