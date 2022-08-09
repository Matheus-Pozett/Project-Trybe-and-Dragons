import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _WarriorInstances = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    Warrior._WarriorInstances += 1;
    return Warrior._WarriorInstances;
  }
}