import Game from "./Game";
import MainMenu from "./MainMenu";
import SettingsSingleton from "./SettingsSingleton";

const settings = SettingsSingleton.getInstance();
const menu = new MainMenu("A Game");
menu.displaySettings();

settings.resolution = [640, 480];
settings.volume = 50;
settings.difficulty = "Easy";

const game = new Game("Tre");
game.displaySettings();

const settings2 = SettingsSingleton.getInstance();
console.log(settings2);
