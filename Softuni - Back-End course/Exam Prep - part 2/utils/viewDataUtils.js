const { paymentMethodsMap } = require('../constants');

exports.getPaymenMethodViewData = (selectedPaymentMethod) => {
    const paymentMethods = Object.keys(paymentMethodsMap).map(key => ({ 
        value: key, 
        label: paymentMethodsMap[key],
        isSelected: selectedPaymentMethod == key, 
    }));

    return paymentMethods;
}
