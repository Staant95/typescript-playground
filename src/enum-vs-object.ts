enum LOG_LEVEL {
NOLOG = 0,
ERROR = 1,
WARN = 2,
INFO = 3,
DEBUG = 4,
TRACE = 5,
}

// LOG_LEVEL is used both as value and type
const logLevel: LOG_LEVEL = LOG_LEVEL.DEBUG;

// in this particular case you could assign a random number and it works fine....
const notAllowedLevel: LOG_LEVEL = 7434;

enum STRING_LOG_LEVEL {
NOLOG = 'NO_LOG',
ERROR = 'ERROR',
WARN = 'WARN',
INFO = 'INFO',
DEBUG = 'DEBUG',
TRACE = 'TRACE',
}

const slightlyBetterLog: STRING_LOG_LEVEL = STRING_LOG_LEVEL.DEBUG;

// You cannot assign a "raw" string even if it's present in the enum type...
// when taking user input you have to map it to a particular enum member
// or if you write a library, the client will need to also import the Enum to
// correctly invoke your function that make uses of it

// @ts-expect-error
const slightlyBetterLog2: STRING_LOG_LEVEL = 'ERROR';

const LogLevel = {
NOLOG: 0,
ERROR: 1,
WARN: 2,
INFO: 3,
DEBUG: 4,
TRACE: 5,
} as const;

type LogLevelType = typeof LogLevel[keyof typeof LogLevel];

const betterLogLevel: LogLevelType = 0;

// Set value as you would do with the Union type
const betterLogLevel2: LogLevelType = LogLevel.ERROR;

// catches the error if a wrong log level is passed
const betterLogLevel3: LogLevelType = 8;
