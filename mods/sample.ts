

import * as modlib from 'modlib';

function OnSampleRevived_Action(eventInfo: {
    eventPlayer: mod.Player;
    eventOtherPlayer: mod.Player;
}) {
}

function OnSampleRevived(conditionState: modlib.ConditionState, eventInfo: {
    eventPlayer: mod.Player;
    eventOtherPlayer: mod.Player;
}) {
    let newState = true;
    if (!conditionState.update(newState)) {
        return;
    }
    OnSampleRevived_Action(eventInfo);
}

export function OnRevived(eventPlayer: mod.Player, eventOtherPlayer: mod.Player) {
    const eventInfo = { eventPlayer, eventOtherPlayer };
    let eventNum = 0;
    OnSampleRevived(modlib.getPlayerCondition(eventPlayer, eventNum++), eventInfo);
}