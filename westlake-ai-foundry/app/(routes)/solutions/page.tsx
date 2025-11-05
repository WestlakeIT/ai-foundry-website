import Card from '@/components/ui/Card';

export default function SolutionsPage() {
  return (
    <section className="pt-28 pb-16 px-6">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">AI Solutions Across Industries</h1>
        <p className="mt-4 text-textMuted">Pre-built frameworks. Customizable modules. Industry expertise.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-primary text-xl">💰 Financial Services</h3>
            <ul className="mt-2 list-none text-textMuted space-y-1">
              <li>Fraud detection systems</li>
              <li>Algorithmic trading platforms</li>
              <li>Credit risk assessment AI</li>
              <li>Customer service automation</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-primary text-xl">🏥 Healthcare</h3>
            <ul className="mt-2 list-none text-textMuted space-y-1">
              <li>Diagnostic imaging AI</li>
              <li>Patient outcome prediction</li>
              <li>Drug discovery acceleration</li>
              <li>Clinical trial optimization</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-primary text-xl">🛍️ Retail & E-commerce</h3>
            <ul className="mt-2 list-none text-textMuted space-y-1">
              <li>Demand forecasting</li>
              <li>Personalization engines</li>
              <li>Inventory optimization</li>
              <li>Visual search systems</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-primary text-xl">🏭 Manufacturing</h3>
            <ul className="mt-2 list-none text-textMuted space-y-1">
              <li>Predictive maintenance</li>
              <li>Quality control vision systems</li>
              <li>Supply chain optimization</li>
              <li>Digital twin creation</li>
            </ul>
          </Card>
        </div>

        <h3 className="mt-14 text-center text-2xl text-primary">Core Capabilities</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center"><div className="text-3xl">🤖</div><h3 className="text-xl">Custom LLMs</h3><p>Your own ChatGPT</p></Card>
          <Card className="text-center"><div className="text-3xl">👁️</div><h3 className="text-xl">Computer Vision</h3><p>See what humans miss</p></Card>
          <Card className="text-center"><div className="text-3xl">📊</div><h3 className="text-xl">Predictive Analytics</h3><p>Know before it happens</p></Card>
          <Card className="text-center"><div className="text-3xl">⚡</div><h3 className="text-xl">Process Automation</h3><p>10x efficiency gains</p></Card>
        </div>
      </div>
    </section>
  );
}

