/**
 * @param values: number[];
 * @param weights: number[];
 * @param knapsackCapacity: number;
 */
function maxJoy(values, weights, knapsackCapacity) {

    // identify if any of the items can be completely ignored if
    // they have a value of 0
    const filteredValues = values.filter((item)=> item > 0);

    // they have a greater weight than knapsackCapacity
    const filteredWeights = weights.filter((item)=>
        item < knapsackCapacity
    );

    // local data structure - join 2 datasets into a single array, filter out the invalid items
    const finalArray = [];
    for (let i = 0; i < values.length; i++) {
        const obj = {value: values[i], weight: weights[i]}
        finalArray.push(obj);
    }

    // console.log(finalArray);

    const filteredArray = finalArray.filter((obj) => {
        return obj.value > 0 && obj.weight < knapsackCapacity;
    });

    console.log(filteredArray);

    if (filteredArray.length === 0) {
        return undefined;
    }

    const permutations = [];

    // determine all possible permutations of items that can fit in the //knapsack and store their values



    // return the highest value
    return -1;
}

module.exports = maxJoy;
