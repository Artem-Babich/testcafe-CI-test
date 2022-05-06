import { Selector } from 'testcafe';

fixture`My CI fixture`
    .page('http://localhost:8500');

test('first', async t => {
    const buttonSelector = Selector('#button1');
    await t.click(buttonSelector)
    const spanSelector = Selector('#span1');
    await t.expect(spanSelector.innerText).eql('TEST');
})
