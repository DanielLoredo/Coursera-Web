module.exports = (temp, element) => {
    let output = temp.replace(/{%IMAGE%}/g, element.image);
    output = output.replace(/{%PRODUCT%}/g, element.productName);
    output = output.replace(/{%FROM%}/g, element.from);
    output = output.replace(/{%NUTRIENTS%}/g, element.nutrients);
    output = output.replace(/{%QUANTITY%}/g, element.quantity);
    output = output.replace(/{%PRICE%}/g, element.price);
    output = output.replace(/{%DESCRIPTION%}/g, element.description);
    output = output.replace(/{%ID%}/g, element.id);

    if(!element.organic) {
        output = output.replace("{%NOT_ORGANIC%}", "not-organic");
    }

    return output;
}

