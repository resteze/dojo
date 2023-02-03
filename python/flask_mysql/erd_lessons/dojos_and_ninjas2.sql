insert into dojos(name, created_at, updated_at)
values('dojo1', now(), now());
insert into dojos(name, created_at, updated_at)
values('dojo2', now(), now());
insert into dojos(name, created_at, updated_at)
values('dojo3', now(), now());

-- creates dojos

select * from dojos;
select * from ninjas;
set sql_safe_updates = 0;
delete from dojos;
delete from ninjas;

-- deletes for ninjas and dojos

insert into dojos(id, name, created_at, updated_at)
values('1', 'dojo1', now(), now());
insert into dojos(id, name, created_at, updated_at)
values('2', 'dojo2', now(), now());
insert into dojos(id, name, created_at, updated_at)
values('3', 'dojo3', now(), now());

-- adds dojos again

select * from ninjas
join dojos
on dojos.id = ninjas.dojos_id;

-- joins ninjas and dojos

insert into ninjas(ninjas.id,first_name, last_name, age, ninjas.dojos_id, created_at, updated_at)
values(1,'ninja', '1', 20, 1, now(),now());
insert into ninjas(ninjas.id,first_name, last_name, age, ninjas.dojos_id, created_at, updated_at)
values(2,'ninja', '2', 25, 1, now(),now());
insert into ninjas(ninjas.id,first_name, last_name, age, ninjas.dojos_id, created_at, updated_at)
values(3,'ninja', '3', 28, 1, now(),now());

-- inserts 3 ninjas into dojo1

insert into ninjas(ninjas.id,first_name, last_name, age, ninjas.dojos_id, created_at, updated_at)
values(4,'ninja', '1', 10, 2, now(),now());
insert into ninjas(ninjas.id,first_name, last_name, age, ninjas.dojos_id, created_at, updated_at)
values(5,'ninja', '2', 15, 2, now(),now());
insert into ninjas(ninjas.id,first_name, last_name, age, ninjas.dojos_id, created_at, updated_at)
values(6,'ninja', '3', 18, 2, now(),now());

-- inserts 3 ninjas into dojo2

insert into ninjas(ninjas.id,first_name, last_name, age, ninjas.dojos_id, created_at, updated_at)
values(7,'ninja', '1', 30, 3, now(),now());
insert into ninjas(ninjas.id,first_name, last_name, age, ninjas.dojos_id, created_at, updated_at)
values(8,'ninja', '2', 35, 3, now(),now());
insert into ninjas(ninjas.id,first_name, last_name, age, ninjas.dojos_id, created_at, updated_at)
values(9,'ninja', '3', 38, 3, now(),now());

-- inserts 3 ninjas into dojo3

select * from ninjas
join dojos
on dojos.id = ninjas.dojos_id
where ninjas.dojos_id = '1';

-- shows ninjas in dojo1

select * from ninjas
join dojos
on dojos.id = ninjas.dojos_id
where ninjas.dojos_id = '2';

-- shows ninjas in dojo2

select * from ninjas
join dojos
on dojos.id = ninjas.dojos_id
where ninjas.dojos_id = '3';

-- shows ninjas in dojo3
