import SettingsSingleton from "./SettingsSingleton";

export default class MainMenu {
  constructor(readonly gameName: string) {}

  public displaySettings() {
    console.log(SettingsSingleton.getInstance());
  }
}
