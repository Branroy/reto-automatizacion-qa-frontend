
module.exports = {
    default: {
        paths: [
            './src/features/**/*.feature'
        ],

        requireModule: [
            'ts-node/register'
        ],

        format: [
            '@serenity-js/cucumber'
        ],

        formatOptions: {
            specDirectory: './src/features'
        },

        require: [
            './src/support/**/*.config.ts',
            './src/step-definitions/**/*.ts'
        ]
    }
};
