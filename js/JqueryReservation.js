$(document).ready(function () {
    var value1 = -1;
    $("#nbp").click(function () {
        $("#chaises").empty();
        var value = $('#nbp').find(":selected").val();
        var image = "<img src='images/chaise.jpg'/>";

        for (var i = 0; i < value; i++) {
            $("#chaises").append(image);
        }
        value1 = value;

    });

    var d;
    $('#date').Zebra_DatePicker({
        format: 'd/m/Y', onSelect: function () {
            var dt = $(this).context.value;
            d = dt;
        }
    });



    $("#b1").click(function () {
        if (value1 === -1) {
            alert('saisir nombre des places')
        } else {
            var h;
            if ($('input[name="toggle_option"]').is(':checked')) {
                var x = $("input[name=toggle_option]:checked").each(
                    function () {
                        var v = $(this).val();
                        if (v === "mme") { v = "Madamme"; }
                        else if (v === "mlle") { v = "Mademoiselle"; }
                        else if (v === "m") { v = "Monsieur"; }
                        console.log(v);
                        h = v;
                    });


                var nom = $('#nom').val();
                var n = nom.length;
                if (n < 10 || isNaN(nom) === false) {
                    alert('nom et prenom tres court');

                } else {

                    var validetel = /\d{8}$/;
                    var tel = $('#tel').val();
                    if (validetel.test(tel) === false) {
                        alert('numero de tel invalide');
                        var accom = $('#accompagnateurs').val();
                    } else {

                        $("#div_resume").empty();
                        var largee =' Resume de votre commande <br>'
                        $("#div_resume").append(largee);
                        var large = ' Bonjour ' + h + ' <strong> ' + nom +
                            ' </strong> <br> votre commande du ' + d + '<br> a bien ete validee les plats commandes sont <br>'


                        $("#div_resume").append(large);


                        var prix = 0;
                        var man;
                        var x = $("input[name=cmd]:checked").each(
                            function () {
                                var p = $(this).data('prix');
                                prix = prix + parseFloat(p);
                                px = prix;
                                var dt = $(this).context.value;
                                man = dt;

                                var large1 =' <h3>' +man+'</h3> <br>';

                                $("#div_resume").append(large1);

                            });
                        var large2 = ' le montant total de la commande est de ' +px+' DT </div></div></div>';
                            $("#div_resume").append(large2);




                    }
                }
            } else alert('la civilite est obligatoire');
        }

    });

});
