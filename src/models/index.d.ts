import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Rental {
  readonly id: string;
  readonly name?: string;
  readonly image?: string;
  readonly price?: number;
  readonly location?: string;
  constructor(init: ModelInit<Rental>);
  static copyOf(source: Rental, mutator: (draft: MutableModel<Rental>) => MutableModel<Rental> | void): Rental;
}