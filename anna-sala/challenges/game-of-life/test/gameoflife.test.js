










describe('Given a function GOL',()=>{
    const scenarios=[
        [0,1,0],[0,1,0],[0,1,0]
    ]
    scecenarios.forEach((scenario)=>{
        describe(`when invoked with array ${scenario[0]} and callback ${scenario[1]}`, ()=>{
            test(`then the result will be ${scenario[2]}`)
        })
    })
})