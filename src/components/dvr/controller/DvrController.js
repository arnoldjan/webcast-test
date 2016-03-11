'use strict';

/**
 * @ngInject
 */
module.exports = function () {
    console.log('da');
    var vm = this;
    vm.submit = submit;
    vm.model = {};
    vm.options = {};
    vm.fields = getFields();

    // Public methods //////////////////////////////////////////////////////////////////////////////////////////////////

    function submit() {
        console.log('submit');
    }

    // private methods /////////////////////////////////////////////////////////////////////////////////////////////////

    function getFields() {
        return [
            {
                key: 'streamname',
                type: 'input',
                templateOptions: {
                    required: true,
                    type: 'string',
                    label: 'Streamname',
                    placeholder: 'Streamname'
                }
            }
        ];
    }
};
