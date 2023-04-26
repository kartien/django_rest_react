#1/bin/bash

echo "  _   _            _       "          
echo " ( ) ( )          ( )_ _    "         
echo " | |/ /   _ _ _ __|  _)_)  __   ___  "
echo " |   (  / _  )  __) | | |/ __ \  _  \ "
echo " | |\ \( (_| | |  | |_| |  ___/ ( ) | "
echo " (_) (_)\__ _)_)   \__)_)\____)_) (_) "

echo "Install requirements.txt"
pip install -r requirements.txt

echo "Makemigrations"
python manage.py makemigrations

echo "Migrate"
python manage.py migrate

echo "Runserver" 
python manage.py runserver 3000


