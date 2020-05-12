import SFItemClass from "./SFItemClass";

export default class SFItemPacket {
  constructor(public itemClass: SFItemClass, public amount: number) {}
}