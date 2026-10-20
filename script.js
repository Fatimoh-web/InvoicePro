const invoiceForm = document.getElementById("invoice-form");
const invoiceResult = document.getElementById("invoice-result");
invoiceForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const businessName = document.getElementById("business-name").value;
    const customerName = document.getElementById("customer-name").value;
    const itemName = document.getElementById("item-name").value;
    const quantity = Number(document.getElementById("quantity").value);
    const price = Number(document.getElementById("price").value);
    const total = quantity * price;
    invoiceResult.innerHTML = 
    `
    <h2>INVOICE</h2>
    <p><strong>Business:</strong> ${businessName}</p>
    <p><strong>Customer:</strong> ${customerName}</p>
    <hr>
    <p><strong>Item:</strong> ${itemName}</p>
    <p><strong>Quantity:</strong> ${quantity}</p>
    <p><strong>Price per item:</strong> \u20A6${price.toFixed(2)}</p>
    <h3>Total: \u20A6${total.toFixed(2)}</h3>
    <button type="button" onclick="window.print()">Print Invoice</button>
    `;
});