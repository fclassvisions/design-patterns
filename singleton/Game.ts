import SettingsSingleton from "./SettingsSingleton";

export default class Game {
  constructor(readonly playerName: string) {}

  public displaySettings() {
    console.log(SettingsSingleton.getInstance());
  }
}
