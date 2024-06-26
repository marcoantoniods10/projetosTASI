//*******************************************************
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro
// Curso: CTS Analise e Desenvolvimento de Sistemas
// Disciplina: Topicos Avançados de SI - I
// Autor: Marco Antonio dos Santos
// RGM: 35300876
// Descrição: Projeto A2 - Desenvolver sitema com node.JS com 3 caminhos que são IMC, NOTAS e DOLAR. Todos feitos com um retorno de HTML.
//*******************************************************

const PORT = 5678;

const http = require ('http');
const url = require ('url');
const fs =require ('fs');

const server = http.createServer((req, res) =>{

    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;
if (path === "/"){
    fs.readFile('inicio.html', 'utf-8', (err, data) => {
        if(err){
            res.writeHead(500,{'Content-Type' : "text/plain; charset=utf-8"} )
            res.end('500 - Erro interno do servidor...');
        }else{
            res.writeHead(400, {'Content-Type' : "text/html; charset=utf-8"});
            res.end(data);
       }})
       
        }
else if (path === "/imc"){
    const peso = parseFloat(query.pes)
    const altura = parseFloat(query.alt)
    if (isNaN(peso) || isNaN(altura)){
        res.writeHead(400, {'Content-Type': "text/plain; charset=utf-8"});
        res.end(`ERRO 400 - Valor de IMC invalido.`);
        return;   
    }else{
        
        const imc = peso / (altura * altura) 

        if (imc < 18.5){
            fs.readFile('magro.html', 'utf-8', (err, data) => {
                if(err){
                    res.writeHead(500,{'Content-Type' : "text/plain; charset=utf-8"} )
                    res.end('500 - Erro interno do servidor...');
                }else{
                    data = data.replace(`{imc}`, imc.toFixed(2));
                    data = data.replace(`{peso}`, peso.toFixed(2));
                    data = data.replace(`{altura}`, altura.toFixed(2));
                    res.writeHead(400, {'Content-Type' : "text/html; charset=utf-8"});
                    res.end(data);
               }})
               
                }
        else if(imc >= 18.5 && imc <= 24.9){
            fs.readFile('normal.html', 'utf-8', (err, data) => {
                if(err){
                    res.writeHead(500,{'Content-Type' : "text/plain; charset=utf-8"} )
                    res.end('500 - Erro interno do servidor...');
                }else{
                    data = data.replace(`{imc}`, imc.toFixed(2));
                    data = data.replace(`{peso}`, peso.toFixed(2));
                    data = data.replace(`{altura}`, altura.toFixed(2));
                    res.writeHead(400, {'Content-Type' : "text/html; charset=utf-8"});
                    res.end(data);
               }})
               
                }
        else if(imc >= 25 && imc <= 29.9){
            fs.readFile('sobrepeso.html', 'utf-8', (err, data) => {
                if(err){
                    res.writeHead(500,{'Content-Type' : "text/plain; charset=utf-8"} )
                    res.end('500 - Erro interno do servidor...');
                }else{
                    data = data.replace(`{imc}`, imc.toFixed(2));
                    data = data.replace(`{peso}`, peso.toFixed(2));
                    data = data.replace(`{altura}`, altura.toFixed(2));
                    res.writeHead(400, {'Content-Type' : "text/html; charset=utf-8"});
                    res.end(data);
               }})
               
                }
        else if (imc >= 30 && imc <= 34.9){
            fs.readFile('obesidade1.html', 'utf-8', (err, data) => {
                if(err){
                    res.writeHead(500,{'Content-Type' : "text/plain; charset=utf-8"} )
                    res.end('500 - Erro interno do servidor...');
                }else{
                    data = data.replace(`{imc}`, imc.toFixed(2));
                    data = data.replace(`{peso}`, peso.toFixed(2));
                    data = data.replace(`{altura}`, altura.toFixed(2));
                    res.writeHead(400, {'Content-Type' : "text/html; charset=utf-8"});
                    res.end(data);
               }})
               
                }
        else if(imc >= 35 && imc <= 39.9){
            fs.readFile('obesidade2.html', 'utf-8', (err, data) => {
                if(err){
                    res.writeHead(500,{'Content-Type' : "text/plain; charset=utf-8"} )
                    res.end('500 - Erro interno do servidor...');
                }else{
                    data = data.replace(`{imc}`, imc.toFixed(2));
                    data = data.replace(`{peso}`, peso.toFixed(2));
                    data = data.replace(`{altura}`, altura.toFixed(2));
                    res.writeHead(400, {'Content-Type' : "text/html; charset=utf-8"});
                    res.end(data);
               }})
               
                }
        else if (imc >= 40){
            fs.readFile('obesidade3.html', 'utf-8', (err, data) => {
                if(err){
                    res.writeHead(500,{'Content-Type' : "text/plain; charset=utf-8"} )
                    res.end('500 - Erro interno do servidor...');
                }else{
                    data = data.replace(`{imc}`, imc.toFixed(2));
                    data = data.replace(`{peso}`, peso.toFixed(2));
                    data = data.replace(`{altura}`, altura.toFixed(2));
                    res.writeHead(400, {'Content-Type' : "text/html; charset=utf-8"});
                    res.end(data);
               }})
               
                }else{
                    fs.readFile('error404.html', 'utf-8', (err, data) =>{
                        if (err){
                            res.writeHead(500,{'Content-Type' : "text/plain; charset=utf-8"} )
                            res.end('500 - Erro interno do servidor...');
                        }else{
                            res.writeHead(404, {'Content-Type' : "text/html; charset=utf-8"});
                            res.end(data);      
                             }})
                    }
    
    }
}
    else if (path ==="/dolar"){
    //Formula para digitar apenas o valor do dolar e ter retorno:
        var dolar = parseFloat(query.d);
        var real 
        var conv
        if(isNaN(dolar)){
            res.writeHead(400, {'Content-Type': "text/plain; charset=utf-8"});
            res.end(`ERRO 400 - Valor de IMC invalido.`);
         }else
            real = 5.01
            conv = dolar*real;
            {
                fs.readFile('conv.html', 'utf-8', (err, data) => {
                    if(err){
                        res.writeHead(500,{'Content-Type' : "text/plain; charset=utf-8"} )
                        res.end('500 - Erro interno do servidor...');
                    }else{
                        data = data.replace(`{dolar}`, dolar.toFixed(2));
                        data = data.replace(`{real}`, real.toFixed(2));
                        data = data.replace(`{conv}`, conv.toFixed(2));
                        res.writeHead(400, {'Content-Type' : "text/html; charset=utf-8"});
                        res.end(data);        

                    }})}
            
    
    }
    else if (path === "/notas"){
        const nota1 = parseFloat(query.n1);
        const nota2 = parseFloat(query.n2);
        const media = parseFloat(query.med);

        if (isNaN(nota1) || isNaN(nota2) || isNaN(media)){
            res.writeHead(400, {'Content-Type': "text/plain; charset=utf-8"});
            res.end(`ERRO 400 - Valor das notas invalidas.`);
        }else {
            const media = (nota1+nota2)/2;
            if (media >= 6.0  && media <= 10){
                res.writeHead(200, {'Content-type': "text/plain; charset=utf-8"}); 
                res.end(`Aprovado \nMedia: ${media.toFixed(2)}`);
           }else if (media < 6.0){
            res.writeHead(200, {'Content-type': "text/plain; charset=utf-8"}); 
            res.end(`Reprovado \nMedia: ${media.toFixed(2)}`);
            }else if (media > 10){
                res.writeHead(400, {'Content-type': "text/plain; charset=utf-8"}); 
                res.end(`Insira Numeros apenas de 0 a 10`);      

            }
        }
         
                    
        }
        
});

server.listen(PORT, () => {
    console.log (`[OK - Servidor iniciado em http://localhost:${PORT}]`);
})

//Indice Para facil acesso:
//http://localhost:5978/dolar?d=1
//http://localhost:5978/notas?n1=6.0&med=6.0&n2=5.0
//http://localhost:5978/imc?pes=80&alt=1.80
