function getToppingsTotal(e) {
    var form = this.form;
    var val = parseFloat(form.elements['tops_tot'].value);
    if ( this.checked == true ) {
    val += parseFloat(this.value);
    } else {
    val -= parseFloat(this.value);
    }
    form.elements['tops_tot'].value = formatDecimal(val);
    updatePizzaTotal(form);
    }

    function updatePizzaTotal(form) {
        var sz_tot = parseFloat(form.elements['checkbox'].value);
        var tops_tot = parseFloat(form.elements['tops_tot'].value);
        form.elements['total'].value = formatDecimal(sz_tot + tops_tot);
        }

        (function() {
            var form = document.getElementById('checkbox1');
            var el = document.getElementById('checkbox2');
            var tops = el.getElementsByTagName('input');
            for (var i=0, len=tops.length; i<len; i++) {
            if (tops[i].type === 'checkbox') {
            tops[i].onclick = getToppingsTotal;
            }
            }
            var sz = form.elements['size'];
            for (var i=0, len=sz.length; i<len; i++) {
            sz[i].onclick = getSizePrice;
            }
            // set sz_tot to value of selected
            form.elements['sz_tot'].value