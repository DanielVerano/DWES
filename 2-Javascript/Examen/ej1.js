function hacerPedido() {
    let plato = document.getElementById('plato');
    let entrante = document.getElementById('entrante');
    let bebida = document.getElementById('bebida');
    let postre = document.getElementById('postre');
    let vipSi = document.getElementById('vipSi');
    let vipNo = document.getElementById('vipNo');

    const precioPlato = 6;
    const precioComplemento = 1;
    const descuentoVip = 0.05;
    const ivaTipo1 = 0.10;
    const ivaTipo2 = 0.21;

    let precioSinIva = precioPlato;
    let totalIva = precioPlato * ivaTipo1;
    let total = 0;
    let descuento = 0;
    let mensaje = `Usted ha elegido el plato ${plato.value}.\n`;


    if (entrante.checked) {
        precioSinIva += precioComplemento;
        totalIva += precioComplemento * ivaTipo1;
        mensaje += `Ha elegido como extra un entrante.\n`;
    }

    if (bebida.checked) {
        precioSinIva += precioComplemento;
        totalIva += precioComplemento * ivaTipo2;
        mensaje += `Ha elegido como extra una bebida.\n`;
    }

    if (postre.checked) {
        precioSinIva += precioComplemento;
        totalIva += precioComplemento * ivaTipo1;
        mensaje += `Ha elegido como extra un postre.\n`;
    }

    if (vipSi.checked) {
        descuento = precioSinIva * descuentoVip;
        precioSinIva = precioSinIva * (1 - descuentoVip);
        mensaje += `Descuento aplicado por ser VIP: ${descuento.toFixed(2)} €\n`;
    }

    totalIva = totalIva - descuento;
    total = precioSinIva + totalIva;

    mensaje += `Precio total sin IVA: ${precioSinIva.toFixed(2)} €\n`;
    mensaje += `Total IVA: ${totalIva.toFixed(2)} €\n`;
    mensaje += `El precio total del menú es ${total.toFixed(2)} €`;

    alert(mensaje);
}