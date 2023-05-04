//instanciando o sqlite
const sqlite3 = require('sqlite3').verbose();
//criando o banco de dados escola
const db = new sqlite3.Database('escola.sqlite', (err) => {
    if (err) {
        return console.error(err.message);
    }
    //Criando o sincronismo automático do banco
    db.serialize(() => {

        //Criando a tabela aluno
        db.run("create table if not exists aluno (matricula int primary key, nome varchar(60), email varchar(40), cidade varchar(60))");

        // Inserindo os registros na tabela aluno
        db.run("insert into aluno(matricula, nome, email,cidade) VALUES(1,'Lincon','lincon@gmail.com','São Mateus')");
        db.run("insert into aluno(matricula, nome, email,cidade) VALUES(2,'Julia','julia@gmail.com','São Mateus')");
        db.run("insert into aluno(matricula, nome, email,cidade) VALUES(3,'João','joao@gmail.com','Vitória')");

        // Mostra os registros da tabela aluno
        db.each("select matricula, nome from aluno", (err, reg) => {
            if (err) {
                console.error(err.message);
            }
            console.log(reg.matricula + "\t" + reg.nome);
        });
    });
});
