module.exports = {
	// Load setup-tests.js before test execution
	"roots": [
		"<rootDir>/src"
	],
	transform: {
		'^.+\\.js$'  : '<rootDir>/node_modules/babel-jest',
		// '.*\\.(ts)$' : '<rootDir>/node_modules/ts-jest',    // TypeScriptファイルをテストする場合
		// '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'    // Vueファイルをテストする場合
	},
	moduleFileExtensions: ['js', 'ts', 'vue'], // テスト対象の拡張子を列挙する,
	// "preset": "react-native",
	// "setupFilesAfterEnv": ['<rootDir>/setup-tests.js'],
	"moduleFileExtensions": ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
	// "transformIgnorePatterns": [
	// 	"/node_modules/(?!native-base)/"
	// ],
	"testMatch": [
		"**/__tests__/**/*.+(ts|tsx|js)",
		"**/?(*.)+(spec|test).+(ts|tsx|js)"
	],
	// "transform": {
	// 	"^.+\\.ts$": "ts-jest"
	//   },
};