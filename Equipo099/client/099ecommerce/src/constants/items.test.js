import items from './items'

test('Should return items', ()=>{
    const itemsResult = items;
    expect(items).toEqual(itemsResult)
})