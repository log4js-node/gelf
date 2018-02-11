// Type definitions for GELF Appender for log4js
export interface GELFAppender {
	'type': '@log4js-node/gelf';
	// (defaults to localhost) - the gelf server hostname
	host?: string;
	// (defaults to 12201) - the port the gelf server is listening on
	port?: number;
	// (defaults to OS.hostname()) - the hostname used to identify the origin of the log messages.
	hostname?: string;
	facility?: string;
	// fields to be added to each log message; custom fields must start with an underscore.
	customFields?: { [field: string]: any };
}
