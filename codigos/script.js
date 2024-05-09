// função calcular para calcular a egua são de segundo grau
function calcular(){

    //puxando os valores do arquivo html
    let atxt = document.getElementById("ax")
    let btxt = document.getElementById("bx")
    let ctxt = document.getElementById("c")

    //convertendo os valores string em number
    let a = Number(atxt.value)
    let b = Number(btxt.value)
    let c = Number(ctxt.value)

    //puxando as caixa onde vai ser inseridas os resultados e calculos
    let res = document.getElementById("res")
    let cal = document.getElementById("cal")

    // calculo da equação

    //se ax,bx e c for igual a 0, ele ativa um alerta de [ERRO]
    if (atxt.value.length == 0 && btxt.value.length == 0 && ctxt.value.length == 0){

        alert("[ERRO] numero invalido ou não escrito!")
    }

    //se ax for igual a 0 ele vira um função afim
    else if (atxt.value.length == 0 ){ 

        //se c for positivo ele vira negativo, pois ele passa para o lado negativo na função
        if (ctxt.value.length > 0){

            //criando a variavel cnega para receber o valor de c negativo e x para o valor final
            let cnega = -c
            x = cnega/b

            //escrevendo a função e o resultado
            res.innerHTML += 
            `
            Esta é uma função afim: ${b}x + ${c} = 0<br>
            O valor do x é: ${x}
            `

            //escrevendo o calculo 
            cal.innerHTML += 
            `
            ${b}x + ${c} = 0<br><br>

            ${b}x = ${cnega}<br>
            x = ${cnega}/${b}<br>
            x = ${x}
            ` 
        }

        //se c for negativo
        else{
         
            //escrendo função e resultado
            res.innerHTML += 
            `
            Esta é uma função afim: ${b}x + ${c} = 0<br>
            O valor do x é: ${x}
            `

            //escrevendo o calculo
            cal.innerHTML += 
            `
            ${b}x + ${c} = 0<br><br>

            ${b}x = ${c}<br>
            x = ${c}/${b}<br>
            x = ${x}
            ` 
        }
    }
    //se bx for igual a 0 ele vira uma função quadratica incompleta
    else if (btxt.value.length == 0){

        //se c for positivo ele vira negativo, pois ele passa para o lado negativo na função
        if (ctxt.value.length > 0){

            //calculando a função
            let cnega = -c
            let ca = cnega / a
            let raizca = Math.sqrt(ca)
            let x = raizca
            
            //se raiz for menor ou igual a 0 
            if (ca <= 0 ){
                

                res.innerHTML = 
                `
                Esta é uma função quadradica incompleta em B: ${a}x² + ${c} = 0<br>
                O valor de X não existe<br>
                `

                cal.innerHTML +=
                `
                ${a}x² + ${c} = 0<br><br>

                ${a}x² = ${c}<br>
                x² = ${c}/${a}<br>
                x² = ${ca}<br>
                x = raiz[${ca}]<br>
                x = nulo
                `

            }

            //se raiz for maior que zero
            else{

                //escrevendo a função e o valor de x
                res.innerHTML +=
                `
                Esta é uma função quadradica incompleta em B: ${a}x² + ${c} = 0<br>
                o valor de x é igual a: ${x}
                `
            
                ///escrevendo o calculo
                cal.innerHTML +=
                `
                ${a}x² + ${c} = 0<br><br>

                ${a}x² = ${c}<br>
                x² = ${c}/${a}<br>
                x² = ${ca}<br>
                x = raiz[${ca}]<br>
                x = +/-${x}
                `
            }
        }
        
        //se c for negativo
        else{

            //calculando a função  
            ca = c/a
            x = Math.sqrt(ca)
            

             //escrevendo a função e o valor de x]
             res.innerHTML +=
             `
             Esta é uma função quadradica incompleta: ${a}x² + ${c} = 0<br>
             o valor de x é igual a: +/-${x}
             `
             
             ///escrevendo o calculo
             cal.innerHTML +=
             `
             ${a}x² + ${c} = 0<br><br>
 
             ${a}x² = ${c}<br>
             x² = ${c}/${a}<br>
             x² = ${ca}<br>
             x = raiz[${ca}]<br>
             x = +/-${x}
             `
        }

    }
    
    //se não c for igual a zero
    else if (ctxt.value.length == 0){
         
        c = 0
        //calculando o delta
        let delta1 = b**2 - 4 * a * c
        let b2 = b**2
        let ac = 4 * a * c 
        let delta2 = b2 - ac
        let delta = Math.sqrt(delta2)
    
        //calculando o x1 
        let x11 = -b + delta / 2 * a
        let bmaisdelta = -b + delta
        let a2mais = 2 * a 
        let x12 = bmaisdelta / a2mais
        let x1 = x12

        //calculando o x2 
        let x21 = -b - delta / 2 * a
        let bsubdelta = -b - delta
        let a2sub = 2 * a 
        let x22 = bsubdelta / a2sub
        let x2 = x22

        //escrevendo o resultado de x1 e x2 na div:res
        res.innerHTML += 
        `
        Esta é um função de segundo grau incompleta em c: ${a}x² + ${b}x + ${c} = 0<br>
        O valor de X1 é igual: ${x1}<br>
        O valor de X2 é igual: ${x2}
        `

        // escrevendo os calculos na div:cal
        cal.innerHTML +=
        ` 
        Calculo:<br><br>
        ${a}x² + ${b}x + ${c} = 0<br><br>

        🔺 = ${b}² - 4 . ${a} . ${c}<br><br>

        🔺 = ${b2} - ${ac}<br><br>

        🔺= ${delta2}<br><br>

        x1 = - ${b} + raiz[${delta}] / 2 . ${a}<br><br>
        x1 = ${bmaisdelta} / ${a2mais}<br><br>
        x1 = ${x1}<br><br><br>

        x2 = - ${b} - ${delta} / 2 . ${a}<br><br>
        x2 = ${bsubdelta} / ${a2sub}<br><br>
        x2 = ${x2}
        `
    }
    
    //calculando a função quadrada
    else{

        //calculando o delta
        let delta1 = b**2 - 4 * a * c
        let b2 = b**2
        let ac = 4 * a * c 
        let delta2 = b2 - ac
        let delta = Math.sqrt(delta2)
    
        //calculando o x1 
        let x11 = -b + delta / 2 * a
        let bmaisdelta = -b + delta
        let a2mais = 2 * a 
        let x12 = bmaisdelta / a2mais
        let x1 = x12

        //calculando o x2 
        let x21 = -b - delta / 2 * a
        let bsubdelta = -b - delta
        let a2sub = 2 * a 
        let x22 = bsubdelta / a2sub
        let x2 = x22

        res.innerHTML += ``
        //escrevendo o resultado de x1 e x2 na div:res
        res.innerHTML += 
        `
        O valor da equação de segundo: ${a}x² + ${b}x + ${c} = 0<br>
        O valor de X1 é igual: ${x1}<br>
        O valor de X2 é igual: ${x2}
        `

        // escrevendo os calculos na div:cal
        cal.innerHTML +=
        ` 
        Calculo:<br><br>
        ${a}x² + ${b}x + ${c} = 0<br><br>

        🔺 = ${b}² - 4 . ${a} . ${c}<br><br>

        🔺 = ${b2} - ${ac}<br><br>

        🔺= ${delta2}<br><br>

        x1 = - ${b} + raiz[${delta}] / 2 . ${a}<br><br>
        x1 = ${bmaisdelta} / ${a2mais}<br><br>
        x1 = ${x1}<br><br><br>

        x2 = - ${b} - ${delta} / 2 . ${a}<br><br>
        x2 = ${bsubdelta} / ${a2sub}<br><br>
        x2 = ${x2}
        `
    }
}
