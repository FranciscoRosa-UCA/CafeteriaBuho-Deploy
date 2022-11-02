module.exports = {
    isArrayFormat : (element) => {
        let res = true;
        try {
            if (
                element.indexOf("[") !== -1 &&
                element.indexOf("]") !== -1
            )
                JSON.parse(element);
            else
                res = false;
        } catch(e) {
            debug({e});
            res = false;
        }
        return res;
    }
}