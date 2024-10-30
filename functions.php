<?php
/*
Plugin Name: Insert Text Symbols
Plugin URI: https://www.photoshopsupply.com
Description: Easily insert text symbols or emojis into your posts or pages. This works with the Gutenberg editor.
Version: 1.1
Author: John Negoita
Author URI: https://profiles.wordpress.org/codingdude/
Text Domain: insert-text-symbols
*/

function mockofun_textsymbols_enqueue_script($hook) {
	$plugin_data = get_plugin_data( __FILE__ );
	$plugin_version = $plugin_data['Version'];

	wp_enqueue_script( 'mockofun-textsymbols-emojis', plugin_dir_url( __FILE__ ).'js/emojis.js', null, $plugin_version );

	wp_enqueue_script( 'mockofun-textsymbols-main', plugin_dir_url( __FILE__ ).'js/main.js',  array('jquery'), $plugin_version );

	wp_enqueue_style( 'mockofun-textsymbols-main-css', plugin_dir_url( __FILE__ ).'css/main.css');
	// wp_enqueue_script('mockofun-textsymbols-main');
}

add_action( 'enqueue_block_editor_assets', 'mockofun_textsymbols_enqueue_script');