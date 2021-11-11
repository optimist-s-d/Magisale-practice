
export default class EnhancedPromise extends Promise {
    static some(promises, count) {
        const rejects = promises.length - count;
        const errors = [];
        const result = [];
        
        if (rejects < 0) { return EnhancedPromise.reject(new Error()); }
        if (rejects === 0) { return EnhancedPromise.resolve(result); }

        return new EnhancedPromise((resolve, reject) => {
            promises.map(prom => {
                prom.then(
                    res => {
                        result.push(res);
                        if (result.length >= count) {
                            resolve(result);
                        }
                    },
                    err => {
                        errors.push(err);
                        if (errors.length >= rejects) {
                            reject(new Error());
                        }
                    });
            });
        });
    }
}
