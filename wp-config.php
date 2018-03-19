<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'hemtenta');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'mysql');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '!(iCdnTko9#2$r<2)Tn;#9ztm5GW/[:v5m=`XkOsmNND0iTo{Za*<xtUph8CYG00');
define('SECURE_AUTH_KEY',  'Npv/`{U?-Iuf|(Cd^PfYToNcMhXpQ@(kL%BgM[QVNb0`!dM2{:;B+=JSYB.2RgQ=');
define('LOGGED_IN_KEY',    's.>Z>RgkXl(/Vg[T,qngeEk/A[y-@)y#ygt0Xb(3*Y[_7 Y>b?JjXA:BFy~IoEz6');
define('NONCE_KEY',        'EKOD[63008obAK)#b7p$W/{b8fX=EH#Fx]|7ODt+D*:9X,CNM6Cn.YumUpw,]ond');
define('AUTH_SALT',        'e1QI&,iTBdqGyA1C>*C|wVCPoOoa%;)GnyRM&aAA-3a8w}OP/a&PWT{4p{Rm/Tg0');
define('SECURE_AUTH_SALT', 'fy{;hcO/?(n=[?{d0kt.bnZ%qtyGXM: 4B3L:<!>MS=<Epb}&tV ZyamL0dKhJmC');
define('LOGGED_IN_SALT',   'K!HI!H+6cN-h=GkoADExB<B;8YZw2=.dc)#g?2Gys&vw$1g(xe}G9Afe9SF<qDT`');
define('NONCE_SALT',       'uvT51^,hy3Xm3QD+Z/#aP2<:Iq }6KhpD{+v]m(Y/m]v+T3;@^P:<]=-?.UryPjr');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
