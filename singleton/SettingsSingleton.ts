export default class SettingsSingleton {
  private static instance: SettingsSingleton;
  public resolution: [number, number] = [1920, 1080];
  public volume: number = 100;
  public difficulty: string = "Normal";

  private constructor() {
    console.log("Creating settings singleton...");
  }

  public static getInstance() {
    if (!this.instance) this.instance = new SettingsSingleton();
    return this.instance;
  }
}
