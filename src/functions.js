export default function(Vue) {

    Vue.functions = {

        // increment function
        increment(data, inc) {
            data += inc;
            return data;
        },

        // decrement function
        decrement(data, dec) {
            if (data > 1) {
                data -= dec;
            }
            return data;
        }

    }

    Object.defineProperties(Vue.prototype, {
        $functions: {
            get: () => {
                return Vue.functions
            }
        }
    })
}