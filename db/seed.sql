DROP DATABASE IF EXISTS frozenyogurtt_db;
CREATE DATABASE frozenyogurtt_db;
\c frozenyogurtt_db;

-- add create tables here




CREATE TABLE flavour(
  id serial primary key,
  name varchar,
  img varchar, 
  price int 
);

 
 CREATE TABLE orders(
  id serial primary key,
  quantity int,
  phone varchar(10),
  total int , 
  flavour_id int not null,
  foreign key(flavour_id) references flavour
);

-- create order
INSERT INTO flavour(name ,img , price)
VALUES
('chocolate','https://vignette.wikia.nocookie.net/icecream/images/d/df/Chocolate.png/revision/latest?cb=20110916143219' , 10),
('vanilla','https://vignette.wikia.nocookie.net/icecream/images/d/d5/Vanilla.png/revision/latest?cb=20110917005433',  12),
('Raspberry','https://5.imimg.com/data5/IL/KB/GLADMIN-36214393/strawberry-ice-cream-250x250.png',13),
('pistachio','http://lamp2.sdu.dk/~johpe15/wordpress3/wp-content/uploads/2016/05/PistachioAlmond_Bowl.png',14),
('strawberry','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0t-nM-BI16Nh0SGnMnem55AxcqRujWVy-2r4AmbJ8MdT55ZxhQ',15),
('Lemon','http://misskarens.com/wp-content/uploads/2018/02/ps-GenuineTart741-420x420.png',11);

-- create order
INSERT INTO orders(quantity , total ,  phone ,   flavour_id )
VALUES
(1, 1 * 10,'0503219824' ,1),
(2, 2 * 12,'0503456789' ,2),
(3, 3 * 13,'0504449824' ,3),
(4, 4 * 14,'0507779824' ,4),
(5, 5 * 15,'0507779833' ,5),
(7, 5 * 11,'0508889833' ,6);

