CREATE DATABASE SNKRS;
USE SNKRS;

Create table Usuario ( 
idUsuario int primary key auto_increment, 
nome varchar(45) ,
email varchar(45) unique,
senha varchar (45)
);

Create table Tenis (
idTenis int primary key auto_increment,
marca varchar(45),
nome varchar(45),
visitas int
);


Create table Endereco (
idEndereco int primary key auto_increment, 
cep char(8), 
numero int, 
fkUsuario int,
foreign key (fkUsuario) references Usuario(idUsuario)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE faleConosco (
	idFale INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(45),
    nome varchar(45),
    assunto varchar(50),
	descricao VARCHAR(250)
);