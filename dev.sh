#!/bin/bash

echo "Run dev django"

echo "MAKEMIGRATIONS"
python manage.py makemigration
echo "MIGRATE"
python manage.py migrate
