'use strict';

/**
 * @ngInject
 */
module.exports = function ($translate) {
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
                    label: $translate.instant('dvr.form.streamname.placeholder'),
                    placeholder: $translate.instant('dvr.form.streamname.placeholder')
                }
            }
        ];
    }
};
