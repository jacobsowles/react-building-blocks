import React from 'react';

const Validator = class Validator {};

Validator.ProhibitChildren = (props, propName, componentName) => {
    let result;

    if (React.Children.count() != 0) {
        result = new Error('`' + componentName + '` does not accept any children.');
    }

    return result;
};

module.exports = Validator;
