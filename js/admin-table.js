$(document).ready(function() {

	$(document).on('click', '.table__link_view', function(e){

        for (var i = 0; i < 6; i++) {
        	$('.admin-event_view p:nth-of-type(' + i + ')').text( $(this).parent().parent().find('td:nth-child(' + i + ')').html() );
        }

    });


    var rowEdit = 0;

    $(document).on('click', '.table__link_edit', function(e){

        rowEdit = $(this).parent().parent().data("row");

        for (var i = 0; i < 6; i++) {
        	$('.form_edit input:nth-of-type(' + i + ')').val( $(this).parent().parent().find('td:nth-child(' + i + ')').html() );
        }

    });

    $('#edit-save').click(function(e){

        for (var i = 0; i < 6; i++) {
            $('table [data-row="' + rowEdit + '"] td:nth-of-type(' + i + ')').text( $('.form_edit input:nth-of-type(' + i + ')').val() );
        }

    });

    var rowCount = $('tbody tr').length;

    $('#add-button').click(function(e){
    	$( 'table' ).append( '<tr data-row=' + rowCount++ + '>');

        for (var i = 1; i < 6; i++) {
        	$('tbody tr:last-child').append('<td>' + $('.form_add input:nth-of-type(' + i + ')').val() + '</td>');
        }

        $( 'tbody tr:last-child' ).append( '<td class="view"><a class="table__link_view" href="#view"> <i class="fa fa-eye" aria-hidden="true"></i> </a></td> <td class="edit"><a class="table__link_edit" href="#edit"> <i class="fa fa-pencil" aria-hidden="true"></i> </a></td>');

        $( 'table' ).append( '</tr>');
    });

});
