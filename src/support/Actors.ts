import { actorCalled } from '@serenity-js/core';

export class Actors {

    static cliente() {
        return actorCalled('Cliente de Sauce Demo');
    }
}