<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitdb0a4e2eed5394cfab48f679b98ec95b
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WooCommerceSerialNumbers\\' => 25,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WooCommerceSerialNumbers\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
            1 => __DIR__ . '/../..' . '/src',
            2 => __DIR__ . '/../..' . '/lib',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'WooCommerceSerialNumbers\\API' => __DIR__ . '/../..' . '/src/API.php',
        'WooCommerceSerialNumbers\\Actions' => __DIR__ . '/../..' . '/src/Actions.php',
        'WooCommerceSerialNumbers\\Admin\\Admin' => __DIR__ . '/../..' . '/src/Admin/Admin.php',
        'WooCommerceSerialNumbers\\Admin\\ListTables\\ActivationsTable' => __DIR__ . '/../..' . '/src/Admin/ListTables/ActivationsTable.php',
        'WooCommerceSerialNumbers\\Admin\\ListTables\\KeysTable' => __DIR__ . '/../..' . '/src/Admin/ListTables/KeysTable.php',
        'WooCommerceSerialNumbers\\Admin\\ListTables\\ListTable' => __DIR__ . '/../..' . '/src/Admin/ListTables/ListTable.php',
        'WooCommerceSerialNumbers\\Admin\\ListTables\\StockTable' => __DIR__ . '/../..' . '/src/Admin/ListTables/StockTable.php',
        'WooCommerceSerialNumbers\\Admin\\Menus' => __DIR__ . '/../..' . '/src/Admin/Menus.php',
        'WooCommerceSerialNumbers\\Admin\\Notices' => __DIR__ . '/../..' . '/src/Admin/Notices.php',
        'WooCommerceSerialNumbers\\Admin\\Orders' => __DIR__ . '/../..' . '/includes/Admin/Orders.php',
        'WooCommerceSerialNumbers\\Admin\\Products' => __DIR__ . '/../..' . '/includes/Admin/Products.php',
        'WooCommerceSerialNumbers\\Admin\\Requests' => __DIR__ . '/../..' . '/includes/Admin/Requests.php',
        'WooCommerceSerialNumbers\\Admin\\Settings' => __DIR__ . '/../..' . '/src/Admin/Settings.php',
        'WooCommerceSerialNumbers\\Cache' => __DIR__ . '/../..' . '/src/Cache.php',
        'WooCommerceSerialNumbers\\Compat' => __DIR__ . '/../..' . '/src/Compat.php',
        'WooCommerceSerialNumbers\\Cron' => __DIR__ . '/../..' . '/src/Cron.php',
        'WooCommerceSerialNumbers\\Encryption' => __DIR__ . '/../..' . '/src/Encryption.php',
        'WooCommerceSerialNumbers\\Frontend\\Frontend' => __DIR__ . '/../..' . '/src/Frontend/Frontend.php',
        'WooCommerceSerialNumbers\\Frontend\\Shortcodes' => __DIR__ . '/../..' . '/src/Frontend/Shortcodes.php',
        'WooCommerceSerialNumbers\\Installer' => __DIR__ . '/../..' . '/src/Installer.php',
        'WooCommerceSerialNumbers\\Lib\\Container' => __DIR__ . '/../..' . '/lib/Lib/Container.php',
        'WooCommerceSerialNumbers\\Lib\\Model' => __DIR__ . '/../..' . '/lib/Lib/Model.php',
        'WooCommerceSerialNumbers\\Lib\\Plugin' => __DIR__ . '/../..' . '/lib/Lib/Plugin.php',
        'WooCommerceSerialNumbers\\Lib\\PluginInterface' => __DIR__ . '/../..' . '/lib/Lib/PluginInterface.php',
        'WooCommerceSerialNumbers\\Lib\\Settings' => __DIR__ . '/../..' . '/lib/Lib/Settings.php',
        'WooCommerceSerialNumbers\\Models\\Activation' => __DIR__ . '/../..' . '/src/Models/Activation.php',
        'WooCommerceSerialNumbers\\Models\\Key' => __DIR__ . '/../..' . '/src/Models/Key.php',
        'WooCommerceSerialNumbers\\Models\\Model' => __DIR__ . '/../..' . '/src/Models/Model.php',
        'WooCommerceSerialNumbers\\Orders' => __DIR__ . '/../..' . '/src/Orders.php',
        'WooCommerceSerialNumbers\\Plugin' => __DIR__ . '/../..' . '/src/Plugin.php',
        'WooCommerceSerialNumbers\\RestAPI' => __DIR__ . '/../..' . '/src/RestAPI.php',
        'WooCommerceSerialNumbers\\Stocks' => __DIR__ . '/../..' . '/src/Stocks.php',
        'WooCommerceSerialNumbers\\Utilities\\Utilities' => __DIR__ . '/../..' . '/src/Utilities/Utilities.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitdb0a4e2eed5394cfab48f679b98ec95b::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitdb0a4e2eed5394cfab48f679b98ec95b::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitdb0a4e2eed5394cfab48f679b98ec95b::$classMap;

        }, null, ClassLoader::class);
    }
}
