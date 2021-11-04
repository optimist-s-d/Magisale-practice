/* eslint-disable curly */
export default class EnhancedSet extends Set {
    union(s) {
        return new EnhancedSet([...this, ...s]);
    }

    intersection(s) {
        const res = new EnhancedSet([...this]);
        res.forEach(el => {
            if (!(this.has(el) && s.has(el))) {
                res.delete(el);
            }
        });
        return res;
    }

    difference(s) {
        const res = new EnhancedSet([...this]);
        res.forEach(el => {
            if (this.has(el) && s.has(el)) {
                res.delete(el);
            }
        });
        return res;
    }

    symmetricDifference(s) {
        const res = new EnhancedSet();
        this.forEach(el => {
            if (!s.has(el)) {
                res.add(el);
            }
        });
        s.forEach(el => {
            if (!this.has(el)) {
                res.add(el);
            }
        });
        return res;
    }

    isSuperset(s) {
        return [...s].every(el => this.has(el));
    }

    isSubset(s) {
        return [...this].every(el => s.has(el));
    }
}
