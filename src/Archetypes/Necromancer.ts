import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _NecromancerInstances = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    Necromancer._NecromancerInstances += 1;
    return Necromancer._NecromancerInstances;
  }
}