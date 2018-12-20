DROP DATABASE IF EXISTS frozenyogurt_db;
CREATE DATABASE frozenyogurt_db;
\c frozenyogurt_db;

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
('chocolate','https://www.ocregister.com/wp-content/uploads/migration/ktf/ktf8vt-ktf8ukpinkberrychocolate.jpg?w=810' , 10),
('vanilla','http://misskarens.com/wp-content/uploads/2013/06/ps-DoubleVanilla741.png',  12),
('Raspberry','http://dorothylynas.com/wordpress/wp-content/uploads/2013/09/yogurt.jpg',13),
('pistachio','https://www.tcby.com/files/products/grid/4dcd16a304c3f9a7.png',14),
('strawberry','http://www.cliparthut.com/clip-arts/47/black-hills-sweets-rapid-city-chocolates-south-dakota-clipart-V70jjh.png',15);

-- create order
INSERT INTO orders(quantity , total ,  phone ,   flavour_id )
VALUES
(1, 1 * 10,'0503219824' ,1),
(2, 2 * 12,'0503456789' ,2),
(3, 3 * 13,'0504449824' ,3),
(4, 4 * 14,'0507779824' ,4),
(5, 5 * 15,'0507779833' ,5);

