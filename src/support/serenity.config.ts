
import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { Cast, configure, Duration } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { chromium, type Browser } from 'playwright';

let browser: Browser | undefined;

BeforeAll(async () => {
    browser = await chromium.launch({
        headless: false,
        slowMo: 300,
    });

    configure({
        actors: Cast.where(actor =>
            actor.whoCan(
                BrowseTheWebWithPlaywright.using(browser!)
            )
        ),

        crew: [
            '@serenity-js/console-reporter',

            [
                '@serenity-js/web:Photographer',
                {
                    strategy: 'TakePhotosOfInteractions',
                },
            ],

            [
                '@serenity-js/html-reporter',
                {
                    outputDirectory: './reports/serenity-js',
                    specDirectory: './src/features',
                },
            ],
        ],

        cueTimeout: Duration.ofSeconds(5),
    });
});

AfterAll(async () => {
    await browser?.close();
});
