# [PHP](https://php.net)

## [Composer](https://getcomposer.org/)
```
mkdir composer
cd composer
https://getcomposer.org/download/
wget https://getcomposer.org/download/latest-stable/composer.phar
set path=%~dp0;%path%
echo @php "%~dp0composer.phar" %*>composer.bat
composer -V

SET HTTP_PROXY=http://username:password@192.168.10.3:3128
```

## [Yii](https://www.yiiframework.com)
```
php ext: curl, mbstring, openssl
composer create-project yiisoft/yii2-app-basic yii2-basic
composer create-project yiisoft/yii2-app-advanced yii2-advanced
```
