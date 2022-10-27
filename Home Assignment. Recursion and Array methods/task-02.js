let InvoiceList = ['Invoice 008', 'Invoice 007', 'Invoice 006', 'Invoice 005'];

// insertToBottom, which adds invoices at the bottom of the lis
function insertToBottom(invoice) {
    InvoiceList.push(invoice);
}

// reverseStack, which reverses the order of the invoices
function reverseList() {
    InvoiceList.reverse();
}

insertToBottom('Invoice 004');
insertToBottom('Invoice 003');
insertToBottom('Invoice 002');
insertToBottom('Invoice 001');
console.log(InvoiceList.join(' '));

reverseList();
console.log(InvoiceList.join(' '));
