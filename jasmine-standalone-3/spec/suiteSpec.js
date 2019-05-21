describe("Comparador toBe", () => {
    it("deve validar o uso do toBe", ()=>{
        expect(somar(9, 1)).toBe(10)
    });

    it("deve validar que os 2 obj não são iguais", () => {
        let obj1 = { valor: true}
        let obj2 = { valor: true}
        expect(obj1).not.toBe(obj2)
    });
});

function somar( x ,y ){
    return x+y
}