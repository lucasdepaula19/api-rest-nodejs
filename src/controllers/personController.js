
let prodList = { items: [] }
let lista = prodList.items;

exports.get = (req, res, next) => {
    res.json(prodList);
};

exports.getById = (req, res, next) => {
    let param_id = req.params.id;

    for (let i = 0; i < lista.length; i++) {
        if(lista[i].id == param_id){
            res.json(lista[i]);
        }
    }
};

exports.post = (req, res, next) => {
    prodList.items.push(req.body)
    res.end('Produto criado!');
};

exports.put = (req, res, next) => {
    let param_id = req.params.id;
    let param_body = req.body;
    
    for (let x = 0; x < lista.length; x++) {
        if(lista[x].id == param_id){
            if(param_body.tipo != undefined){
                lista[x].tipo = param_body.tipo;
            }
            if(param_body.nome != undefined){
                lista[x].nome = param_body.nome;
            }
            if(param_body.fabricante != undefined){
                lista[x].fabricante = param_body.fabricante;
            }
            if(param_body.descricao != undefined){
                lista[x].descricao = param_body.descricao;
            }
            
            res.end('Produto atualizado!');
        }
    }
};

exports.delete = (req, res, next) => {
    let param_id = req.params.id;

    for (let i = 0; i < lista.length; i++) {
        if(lista[i].id == param_id){
            lista.splice(i,1);
            i--;
            res.end('Produto excluído!');
        }
    }
};