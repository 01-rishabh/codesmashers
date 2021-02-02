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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordp' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'gl%I@_Q{}k@V)+zRX~/iiF*GfT6EO{>KQPIOy}q@p#~|nS2}NHpT)o&O[:pZ}}+l' );
define( 'SECURE_AUTH_KEY',  'nd zmN`dw!{3uPu0`LVKCxudFiHAN5ArCT|~Vm~Y_RqA 6>R@~1JVL)3W$(>dz_w' );
define( 'LOGGED_IN_KEY',    'F+mSkh;ma3}<3~-8qG37(?.P`2%!qb;YXJ@d_2)ub.tU3&|rXEzf2TirB:^o-2Y?' );
define( 'NONCE_KEY',        '5=c0pn7n7_p&,r:st-*d(VWe]QGR;~Eg[_O]iq{VqTf]n`*1DXzGlL|sSA^vdGg4' );
define( 'AUTH_SALT',        'QO|U8JBDN`+USCIrY$VA9$UfzZv|>=/g#Peb;}WT6b4c2$A2eB+T&cP=M6~%}Kq|' );
define( 'SECURE_AUTH_SALT', 'aDmc;k(O|t:k3T%d{/Kvxu%WoU$x1*C62{(lc!dZh)/[8~!:Wb4<,+Q44i}1;T#U' );
define( 'LOGGED_IN_SALT',   'vQ5H_M9Pyq):Q6w!d`1|.swHttv25x SF!iXF6b`!4ZBzU>W&@>qoGxjpNRHUPKV' );
define( 'NONCE_SALT',       '4&H6yoYZQF| _%~;7nJZS`yz$n1AxP?bq+BX-%,k`Rbo041hL3Q)iIev$]yJ|oty' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
