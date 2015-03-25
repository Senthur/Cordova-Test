// Reference: https://github.com/brodysoft/Cordova-SQLitePlugin

var SchemaManager = {
	initialize : function() {
		logger.debug("Initializing Schema");
		getDB().transaction(function(tx) {
			logger.debug("Creating schema");
			tx.executeSql(queries.manager.CREATE_MANAGER);
			logger.debug("Creating created");
			// db.executeSql(queries.manager.GET_DB_VERSION, [], function(res) {
			// console.log("Current DB version: " + JSON.stringify(res));
			// var version = 1.0;
			// switch(version) {
			// case 1.0:
			// // Version 1.0 scripts
			// case 1.1:
			// // Version 1.1 scripts
			// default:
			// db.executeSql(queries.manager.GET_DB_VERSION, [], function(res) {
			// console.log("After upgrade version:" + JSON.stringify(res));
			// }
			// break;
			// };
			// tx.executeSql(queries.manager.UPDATE_VERSION, [ 1.0 ], function(tx, res) {
			//
			// });
			// });
		}, function(ex) {
			console.log("ERROR: " + ex.message);
		});
	}
};