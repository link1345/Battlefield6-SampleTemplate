import * as modlib from "modlib";

export function OnPlayerJoinGame(eventPlayer: mod.Player) {
    modlib.ShowNotificationMessage(mod.Message(mod.stringkeys.hello, eventPlayer), eventPlayer);
}