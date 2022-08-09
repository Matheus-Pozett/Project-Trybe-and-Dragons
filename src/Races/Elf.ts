import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _ELFINSTANCE = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    this._ELFINSTANCE += 1;
    return this._ELFINSTANCE; 
  }
}