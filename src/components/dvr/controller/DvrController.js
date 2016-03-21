'use strict';

/**
 * @ngInject
 */
module.exports = function ($translate, $scope) {
    console.log('da');
    var vm = this;
    vm.submit = submit;
    vm.model = {};
    vm.options = {};
    vm.fields = getFields();

    $scope.hlsurl = 'http://10.10.4.14:1935/mi-webcast/myStream8b/master.m3u8?DVR';
    vm.model.streamname = $scope.hlsurl;
    // Public methods //////////////////////////////////////////////////////////////////////////////////////////////////

    function submit() {
        console.log('submit ', vm.model);
        $scope.hlsurl = vm.model.streamname;
        console.log('scope nach submit', $scope.hlsurl);
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
