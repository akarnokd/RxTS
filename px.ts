import * as rs from './reactivestreams-spec'
import * as px from './px-range';
import * as ds from './px-disposables';
import * as sb from './px-subscribers';

export abstract class Px<T> implements rs.Publisher<T> {
    abstract subscribe(s: rs.Subscriber<T>) : void;
    
    static range(start: number, count: number) : Px<number> {
        return new px.PxRange(start, count);
    }
    
    consume(onNext : (t: T) => void, onError? : (t : Error) => void, onComplete? : () => void) : ds.Disposable {
        const cs = new sb.CallbackSubscriber(
            onNext, 
            onError === undefined ? (t: Error) : void => { console.log(t); } : onError,
            onComplete === undefined ? () : void => { } : onComplete);
        this.subscribe(cs);
        return cs;
    }

}
