import * as px from './px';

class Startup {
    public static main(): number {
        
        px.Px.range(1, 10).consume((t : number) : void => {
            console.log(t);
        });
        
        console.log('Hello World');
        return 0;
    }
}

Startup.main();