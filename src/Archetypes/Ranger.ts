import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _RangerInstance = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    Ranger._RangerInstance += 1;
    return Ranger._RangerInstance;
  }
}