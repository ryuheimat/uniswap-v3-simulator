import JSBI from 'jsbi';
import { Tick } from "../model/Tick";
import { jsonMapMember, jsonObject } from "typedjson";

@jsonObject
export class TickManager {
  @jsonMapMember(Number, Tick, { name: "ticks_json" })
  private ticks: Map<number, Tick>;

  constructor(ticks: Map<number, Tick> = new Map()) {
    this.ticks = ticks;
  }

  get(tickIndex: number): Tick {
    return this.ticks.get(tickIndex) || new Tick();
  }

  set(tickIndex: number, tick: Tick) {
    this.ticks.set(tickIndex, tick);
  }

  flipTick(tickIndex: number, tickSpacing: number) {
    // TODO
  }

  getNextInitializedTick(
    tick: number,
    tickSpacing: number,
    leftToRight: boolean
  ): { nextTick: number; initialized: boolean } {
    // TODO
    return { nextTick: 0, initialized: false };
  }

  getFeeGrowthInside(
    tickLower: number,
    tickUpper: number,
    tickCurrent: number,
    feeGrowthGlobal0X128: JSBI,
    feeGrowthGlobal1X128: JSBI,
    leftToRight: boolean
  ): JSBI {
    // TODO
    return JSBI.BigInt(0);
  }
}
