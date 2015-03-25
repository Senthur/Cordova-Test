var sqlite = {
	// db : "",
	initialize : function() {
		logger.debug("Initializing SQLite");
		try {
			sqlite.db = window.sqlitePlugin.openDatabase({
				name : "my.db"
			});
			logger.debug("Connected to SQLite");
		} catch (ex) {
			logger.debug("Error connecting to SQLite");
		}
		SchemaManager.initialize();
	}
};

function getDB() {
	if (sqlite.db != undefined)
		return sqlite.db;
	else
		throw "DB not initialized";
};
