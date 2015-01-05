var TableManaged = function () {

    var initTable3 = function () {

        var table = $('#patientsTable');

        // begin: third table

        table.dataTable({
            "bInfo": false,
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 5,
            "language": {
                "lengthMenu": "  _MENU_ records"
            },
            "columnDefs": [{  // set default column settings
                'orderable': true,
                'targets': [0]
            }],
            "order": [
                [2, "asc"]
            ] // set first column as a default sort by asc
        });

        var tableWrapper = jQuery('#sample_3_wrapper');



        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    }

    return {

        //main function to initiate the module
        init: function () {
            if (!jQuery().dataTable) {
                return;
            }

            initTable3();
        }

    };

}();
