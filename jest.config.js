module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "https://github.com/login"
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    verbose: true
}