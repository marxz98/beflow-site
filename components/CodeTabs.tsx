'use client'

import { useState } from 'react'

const snippets = [
  {
    id: 'node', label: 'Node.js',
    code: `import Mint from '@beflow/mint';

const mint = new Mint({ apiKey: 'mk_live_...' });

const invoice = await mint.invoices.create({
  receiver: { rtn: '0801199912345', name: 'Corp S.A.' },
  items: [{ description: 'Servicio Cloud', quantity: 1, unit_price: 1500.00 }]
});

console.log(invoice.pdf_url);`,
  },
  {
    id: 'python', label: 'Python',
    code: `from beflow_mint import Mint

mint = Mint(api_key="mk_live_...")

invoice = mint.invoices.create(
    receiver={"rtn": "0801199912345", "name": "Corp S.A."},
    items=[{"description": "Servicio Cloud", "quantity": 1, "unit_price": 1500.00}]
)

print(invoice.pdf_url)`,
  },
  {
    id: 'php', label: 'PHP',
    code: `$mint = new \\BeFlow\\Mint(['api_key' => 'mk_live_...']);

$invoice = $mint->invoices->create([
    'receiver' => ['rtn' => '0801199912345', 'name' => 'Corp S.A.'],
    'items' => [['description' => 'Servicio Cloud', 'quantity' => 1, 'unit_price' => 1500.00]]
]);

echo $invoice->pdf_url;`,
  },
  {
    id: 'csharp', label: 'C#',
    code: `var mint = new MintClient("mk_live_...");

var invoice = await mint.Invoices.CreateAsync(new InvoiceParams {
    Receiver = new Receiver("0801199912345", "Corp S.A."),
    Items = new[] { new Item("Servicio Cloud", 1, 1500.00m) }
});

Console.WriteLine(invoice.PdfUrl);`,
  },
  {
    id: 'java', label: 'Java',
    code: `MintClient mint = new MintClient("mk_live_...");

Invoice invoice = mint.invoices().create(
    InvoiceParams.builder()
        .receiver(Receiver.of("0801199912345", "Corp S.A."))
        .addItem("Servicio Cloud", 1, 1500.00)
        .build()
);

System.out.println(invoice.getPdfUrl());`,
  },
]

export function CodeTabs() {
  const [active, setActive] = useState('node')
  const current = snippets.find((s) => s.id === active)!

  return (
    <div className="code-tabs-container">
      <div className="code-tabs">
        {snippets.map((s) => (
          <button
            key={s.id}
            className={`code-tab ${active === s.id ? 'active' : ''}`}
            onClick={() => setActive(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="code-block">
        <pre><code>{current.code}</code></pre>
      </div>
    </div>
  )
}
