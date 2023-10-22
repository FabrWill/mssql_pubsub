module.exports = {
	root: true,
	env: {
		node: true,
	},
    parserOptions: {
        ecmaVersion: 2020,
    },
	extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "plugin:prettier/recommended",
	],
	plugins: [
		'vue'
	],
	rules: {
        "linebreak-style": "off",
        "no-console": "off",
        "no-debugger": "warn",
		"@typescript-eslint/no-this-alias": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-explicit-any": "off",
	}
}