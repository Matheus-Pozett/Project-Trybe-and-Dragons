import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _MageInstances = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    Mage._MageInstances += 1;
    return Mage._MageInstances; 
  }
}