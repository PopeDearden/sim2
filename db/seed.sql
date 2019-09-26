CREATE TABLE housers (
property_name varchar(40) NOT NULL,
address varchar(40) NOT NULL,
city varchar(40) NOT NULL,
state varchar (40) NOT NULL,
zip integer NOT NULL,
image text NOT NULL,
monthly integer NOT NULL,
desired integer NOT NULL
);

better one:
CREATE TABLE housers (
property_name varchar(40) NOT NULL,
address varchar(40) NOT NULL,
city varchar(40) NOT NULL,
state varchar (40) NOT NULL,
zip integer NOT NULL,
image varchar(1000),
monthly integer ,
desired integer
);


ALTER TABLE housers
ADD property_id SERIAL PRIMARY KEY NOT NULL;


INSERT INTO housers (property_name, address, city, state, zip, image, monthly, desired)
VALUES 
('Medium House', '789cow lane', 'layton', 'utah', '84041', 'https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041__340.jpg', 6, 8901);

SELECT * FROM housers;

  INSERT INTO housers ( property_name, address, city, state, zip ) VALUES ( 'other house', '333 burrito', 'salt lake', 'utah', '34322');