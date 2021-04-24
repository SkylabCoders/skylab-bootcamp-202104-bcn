describe(`Given the function, `, () =>{
    [
        {state: FIRSTNAMEreduce, action: 'omar', result: store.clients.fname === 'omar'}
    ]array.forEach(element => {
        describe(`When invoke with ${element.state} and ${element.action}, `, () => {
            test(`Then return ${element.result}`, () => {
                let answer = updateClientReduce(element.state, element.action)
                expect(answer).toStrictEqual(element.resultnpm)
            })
        })
        
    })
}))