import { IterableX } from '../../iterable/iterablex';
import { _catch } from '../../iterable/catch';

/**
 * @ignore
 */
export function catchProto<T>(this: IterableX<T>, ...args: Iterable<T>[]): IterableX<T> {
  return _catch<T>(this, ...args);
}

IterableX.prototype.catch = catchProto;

declare module '../../iterable/iterablex' {
  interface IterableX<T> {
    catch: typeof catchProto;
  }
}
