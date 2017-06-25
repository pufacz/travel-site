module.exports = {
	entry: "/home/adam/Dropbox/Learn/GITProjects/travel-site/app/assets/scripts/App.js",
	output : {
		path: "/home/adam/Dropbox/Learn/GITProjects/travel-site/app/temp/scripts",
		filename: "App.js"
	},
	module: {
		loaders: [
		{
			loader: 'babel',
			query: {
				presets: ['es2015']
			},
			test: /\.js&/, /* thats tells  webpack that babel plugin needs to applied only to .js files*/
			
			exclude: /node_modules/   /* thats tells  webpack which .js files shouldn't be processed by  babel plugin */
			
			
		}
		]
	}
}
